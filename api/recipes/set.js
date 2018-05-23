'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.recipes.set = (recipe_id, attrs, done) => {
    var recipe;
    var user;
    // whitelist attrs
    var keys = [
      "name",
      "images",
      "ingredients",
      "method",
      "duration",
      "rate",
      "creatorID"
    ];

    attrs = _.pick(attrs, keys);

    let ingKeys = [
      "ndbno",
      "name",
      "amount",
      "uom",
      "calories",
      "carbs",
      "protein",
      "fat"
    ];

    let checkValid = next => {
      if (typeof attrs.name != 'string') return done(new Error('name is not a string'));
      if (typeof attrs.method != 'string') return done(new Error('method is not a string'));
      if (typeof attrs.duration != 'number') return done(new Error('duration is not a number'));
      next();
    };

    let checkUser = next => {
      lib.users.get(attrs.creatorID, (err, res) => {
        if (!res) {
          return done(new Error("unknown user"));
        }
        user = res;
        next(err);
      });
    };


    let getRecipe = (next) => {
      lib.recipes.get(
        recipe_id,
        (err, res) => {
          if (!res) {
            done(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };

    let setRecipe = (next) => {
      lib.recipes.set(
        recipe_id,
        attrs, (err) => {
          next(err);
        });
    };

    let ingredientsList = [];
    let amounts = [];

    //needs to edit ingredients if necessary (only amount can be edited)
    //needs to add/delete ingredients


    // if ingredient is not already there, add.
    let checkIngredients = next => {
      let totalCals = 0;
      let totalPro = 0;
      let totalFat = 0;
      let totalCarbs = 0;
      attrs.ingredients.forEach(key => {

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
      // attrs.push({calories: totalCals});
      attrs.calories = totalCals;
      attrs.cabs = totalCarbs;
      attrs.protein = totalPro;
      attrs.fat = totalFat;
      next();
    };


      // add new ingredients
    // for each ingredient in the new list, check it's id against : get recipe_ingredient list for this recipe.

    // remove unused ingredients.
    // for each ingredient in the recipe_ingredient list, check it's id agianst the ingredients in the new_ingredients list.
    // if the ingredient id is not found, remove.





    //now need to add into recipe_ingredients table or edit existing entries.
    //fuck it just set the whole thing to whatever the new recipe has.


    let linkIngredients = next => {
      ingredientsList.forEach(ingredient => {
        lib.recipe.getIngredient(
          recipe_id, ingredient.id,
          (err, res) => {
            if (err) {
              return(Error("Could not get ingredient?"));
            }
            if (!res) {
              //ingredient link could not be found. make it.
              lib.recipes.addIngredient(
                recipe_id,
                ingredient.id,
                ingredient.amount,
                (err, res) => {
                  if (err) {
                    return next(err);
                  }
                }
              );
            } else {
              //edit exisiting ingredient.
              lib.recipe.setIngredient(
                recipe_id,
                ingredient.id,
                ingredient.amount,
                (err, res) => {
                  if (err) {
                    done(Error("Could not edit ingredient_recipe tabe."));
                  }
                }
              )
            }
          }
        )
      });
      next();
    };

    async.series([
      checkValid,
      checkUser,
      getRecipe,
      setRecipe,
      checkIngredients,
      linkIngredients
      
    ], (err) => {
      lib.recipes.getDetail(
        recipe_id,
        (err, res) => {
          done(err, res);
        });
    });
  };
}
