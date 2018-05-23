"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
  var lib = opts.lib;
  var api = opts.api;


  api.mealplans.add = (attrs, done) => {
    var mealplan;
    var user;
    // whitelist attrs
    var keys = [
      "title",
      "creatorID",
      "timeslots"
    ];

    attrs = _.pick(attrs, keys);

    //Validate input fields.

    let checkValid = next => {
      if (typeof attrs.title != 'string') return done(new Error('title is not a string'));
      next();
    };

    //check to see if user id is valid in database
    // use lib.users.getbyid
    // if not exisiting, return user not found
    // if existing - create.

    let checkUser = next => {
      lib.users.get(attrs.user_id, (err, res) => {
        if (!res) {
          return next(new Error("unknown user"));
        }
        user = res;
        next(err);
      });
    };

    //for the ingredients list
    /**
  Check whether the ingredients exist in the ingredients table
  if not, for each one that does not exist, add a new ingredients record.
  Regardless, append the id of the ingredients to an array, because need to update the
  ingredients table for all the amounts.
**/
    let addMealPlanner = next => {
      lib.mealplans.add(
        attrs,
      )
    };
    let checkIngredients = next => {
      // console.log("got here");    
      let totalCals = 0;
      let totalPro = 0;
      let totalFat = 0;
      let totalCarbs = 0;
      attrs.ingredients.forEach(key => {
        // console.log(key);

        lib.ingredients.get(
          key.ndbno,
          (err, ingredient) => {
            if (!ingredient) {
              //add ingredient to ingredient table if it does not exist.
              lib.ingredients.add(key,
                (err, res) => {
                  ingredient = res;
                });

            }

            //TO-DO: maybe calculate the sub total here 
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
      attrs.calories = totalCals;
      attrs.cabs = totalCarbs;
      attrs.protein = totalPro;
      attrs.fat = totalFat;
      next();
    };
    //now i have array for all id of all ingredients. and amounts.

    /**
    For each ingredient_id in the array, make a new ingredients table row
    incs ingredientID, recipe, and amount.
    **/

    //push details to attributes.

    // console.log(totalCals);

    var createRecipe = next => {
      attrs.at = Date.now();
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
          }
        );
      });
      next();
    };
    //TODO: compute the total calories, fat, protein, cabs and upset the recipe
    async.series([
      checkValid,
      checkUser,
      checkIngredients,
      createRecipe,
      linkIngredients
    ], (err) => {
      lib.recipes.getDetail(
        recipe.id,
        (err, res) => {
          done(err, res);
        });
    });
  };
};
