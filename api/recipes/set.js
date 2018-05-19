'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.recipes.set = (recipe_id, attrs, done) => {
    let recipe;
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
      'at',
      'id',
      'name',
      'amount'
      'uom',
      'calories',
      'carbs',
      'protein',
      'fat'
    ]

    let getRecipe = (next) => {
      lib.recipes.get(
        recipe_id,
        (err, res) => {
          if (!res) {
            next(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };

    let set = (next) => {
      lib.recipes.set(
        recipe_id,
        attrs, (err) => {
          next(err);
        });
    };

    var ingredientList[];
    var amounts[];

    //needs to edit ingredients if necessary (only amount can be edited)
    //needs to add/delete ingredients
    let checkIngredients = (next) => {
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

    //now need to add into recipe_ingredients table or edit existing entries.
    //fuck it just set the whole thing to whatever the new recipe has.

    var length = ingredientList.length();

    let addIngredients = (next) => {
      for (var i = 0; i < length; i++) {
        //look for the ingredient in the recipe_ingredient table.
        lib.recipes.getIngredient(
          recipe_id, ingredientList[i],
          (err, res) => {
            if (err) {
              //adds the the ingredient to the recipe_ingredients table.
              lib.recipes.addIngredient(
                recipe_id, ingredientsList[i], amount[i],
                (err, res) => {
                  if (err) {
                    next(err);
                  }
                }
              )
            }
            //ingredient is found, so just the amount is updated.
            lib.recipes.setIngredient(
              res.recipe_id, res.ingredient_id, amount[i],
              (err, res) => {
                if (err) {
                  next(err);
                }
              }
            )
          }
        )
      }
    }

    async.series([
      getRecipe,
      setRecipe,
      checkIngredients,
    ], (err) => {
      done(err);
    });
  };
};
