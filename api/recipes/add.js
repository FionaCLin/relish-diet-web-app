'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  // adds an active user with a username and password if provided

  // if username not provided, uses email add username

  api.recipes.add = (attrs, done) => {
    var recipeID;
    var user;

    // whitelist attrs
    var keys = [
      'name',
      'images'
      'ingredients',
      'method',
      'duration',
      'rate',
      'creatorID'
    ];

    attrs = _.pick(attrs, keys);

    var ingKeys = [
      'id',
      'name',
      'amount'
      'uom',
      'calories',
      'carbs',
      'protein',
      'fat',
    ]

    var ingredients[];
    ingredients = attrs.ingredients;
    ingredints = _.pick(ingredients, ingKeys);

    //check to see if user id is valid in database
    // use lib.users.getbyid
    // if not exisiting, return user not found
    // if existing - create.

    var checkUser = (next) => {
      lib.users.get(
        user_id,
        (err, res) => {
          if (!res) {
            return next(new Error('unknown user'));
          }
          user = res;
          next(err);
        }
      );
    };

    var create = (next) => {
      lib.recipes.add(
        attrs,
        (err, res) => {
          if (err) {
            return next(err);
          }
          recipeID = res;
          next();
        });
    };

    //for the ingredients list
    /**
      Check whether the ingredients exist in the ingredients table
      if not, for each one that does not exist, add a new ingredients record.
      Regardless, append the id of the ingredients to an array, because need to update the
      ingredients table for all the amounts.
    **/
    var ingredientsList[];
    var amounts[];

    var checkIngredients = (next) => {
      attrs.ingredients.forEach(
        (key) => {
          lib.ingredients.get(
            key,
            (err, res) => {
              if (err) {
                //add ingredient to ingredient table if it does not exist.
                lib.ingredients.add(key);
              }
              ingredientList.push(res.id);
            }
            amounts.push(key.amount)
        });
      )
    }
    //now i have array for all id of all ingredients. and amounts.

    /**
      For each ingredient_id in the array, make a new ingredients table row
      incs ingredientID, recipe, and amount.
    **/

    var length = ingredientsList.length();

    var linkIngredients = (next) => {
      for (var i = 0; i < length; i++) {
        lib.recipes.addIngredient(
          recipeID, ingredientsList[i], amounts[i],
          (err, res) => {
            if (err) {
              return next(err);
            }
          }
        );
      }
      next();
    }




    async.series([
      checkUser,
      create,
      checkIngerdients,
      linkIngredients,
    ], (err) => {
      done(err, user);
    });
  };
};
