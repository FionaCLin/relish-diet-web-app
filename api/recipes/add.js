'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;

  api.recipes.add = (attrs, done) => {
    var recipe;
    var user;
    // whitelist attrs
    var keys = [
      'name',
      'method',
      'images',
      'ingredients',
      'calories',
      'cabs',
      'protein',
      'fat',
      'sodium',
      'creatorID',
      'rate'
    ];
    attrs = _.pick(attrs, keys);

    // TODO: validate the
    let ingKeys = [
      'ndbno',
      'name',
      'amount',
      'uom',
      'calories',
      'carbs',
      'protein',
      'fat'
    ];

    let checkValid = next => {
      for (let i = 0; i < 3; i++) {
        if (!attrs[keys[i]] || typeof attrs[keys[i]] !== 'string') { return done(new Error(keys[i] + ' is not a string')); }
      }
      for (let i = 4; i < keys.length - 1; i++) {
        if (!attrs[keys[i]] && typeof attrs[keys[i]] !== 'number') {
          return done(new Error(keys[i] + ' is not a number'));
        }
      }

      next();
    };

    // let ingredients = [];
    // attrs.ingredients.forEach(ingredient => {
    //     ingredients.push(_.pick(ingredient, ingKeys));
    // });

    // check to see if user id is valid in database
    // use lib.users.getbyid
    // if not exisiting, return user not found
    // if existing - create.

    let checkUser = next => {
      lib.users.get(attrs.creatorID, (err, res) => {
        if (err || !res) {
          return next(new Error('unknown user'));
        }
        user = res;
        next(err);
      });
    };

    // for the ingredients list
    /**
  Check whether the ingredients exist in the ingredients table
  if not, for each one that does not exist, add a new ingredients record.
  Regardless, append the id of the ingredients to an array, because need to update the
  ingredients table for all the amounts.
**/
    // let ingredients = [{key: 'ndbno', amount: key.amount}] make the ingredient object array,
    let ingredientsList = [];
    // let totalMacros = [];
    let totalCals = 0;
    let totalPro = 0;
    let totalFat = 0;
    let totalCarbs = 0;
    let checkIngredients = next => {
      attrs.ingredients.forEach(key => {
        lib.ingredients.get(
          key.ndbno,
          (err, ingredient) => {
            if (!ingredient) {
              // add ingredient to ingredient table if it does not exist.
              lib.ingredients.add(key,
                (err, res) => {
                  ingredient = res;
                });
            }

            // TO-DO: maybe calculate the sub total here
            ingredientsList.push({
              id: ingredient.ndbno,
              amount: key.amount
            });
          });
        totalCals += key.calories * key.amount;
        totalCarbs += key.cabs * key.amount;
        totalPro += key.protein * key.amount;
        totalFat += key.fat * key.amount;
      });
      next();
    };
    // now i have array for all id of all ingredients. and amounts.

    /**
    For each ingredient_id in the array, make a new ingredients table row
    incs ingredientID, recipe, and amount.
    **/

    // push details to attributes.

    var createRecipe = next => {
      attrs.at = Date.now();
      if (!(attrs.calories || attrs.cabs || attrs.fat || attrs.protein)) {
        attrs.calories = totalCals;
        attrs.cabs = totalCarbs;
        attrs.protein = totalPro;
        attrs.fat = totalFat;
      }
      lib.recipes.add(user.id, attrs, (err, res) => {
        if (err) {
          return next(err);
        }
        recipe = res;
        next();
      });
    };

    // var length = ingredientsList.length();

    let linkIngredients = next => {
      ingredientsList.forEach(ingredient => {
        lib.recipes.addIngredient(
          recipe.id,
          ingredient.id,
          ingredient.amount,
          (err, res) => {
            if (err) {
              return next(err);
            }
            // ingredient.ndbno = res.id;
          });
      });
      next();
    };
    // TODO: compute the total calories, fat, protein, cabs and upset the recipe
    async.series([
      checkValid,
      checkUser,
      checkIngredients,
      createRecipe,
      linkIngredients
    ], (err) => {
      if (err) {
        return done(err);
      }
      lib.recipes.getDetail(
        recipe.id,
        (err, res) => {
          done(err, res);
        });
    });
  };
};
