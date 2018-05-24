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
      'name',
      'images',
      'ingredients',
      'method',
      'duration',
      'rate',
      'creatorID'
    ];

    attrs = _.pick(attrs, keys);

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
      if (typeof attrs.name !== 'string') return done(new Error('name is not a string'));
      recipe.name = attrs.name;
      if (typeof attrs.method !== 'string') return done(new Error('method is not a string'));
      recipe.method = attrs.method;
      if (typeof attrs.duration !== 'number') return done(new Error('duration is not a number'));
      recipe.duration = attrs.duration;
      next();
    };

    let checkUser = next => {
      lib.users.get(attrs.creatorID, (err, res) => {
        if (!res) {
          return done(new Error('unknown user'));
        }
        user = res;
        next(err);
      });
    };

    let getRecipe = (next) => {
      lib.recipes.getDetail(
        recipe_id,
        (err, res) => {
          if (!res) {
            done(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };

    // remove the ingredients not in the old recipe.ingredients
    let remove = (next) => {
      let removelist = recipe.ingredients.filter(i => !(attrs.ingredients.find(e => e.ndbno == i.ndbno)));
      async.forEach(removelist, (ingredient, cb) => {
        lib.recipes.delIngredient(
          ingredient.ndbno,
          (err, res) => {
            recipe.calories -= ingredient.calories * ingredient.amount;
            recipe.cabs -= ingredient.cabs * ingredient.amount;
            recipe.protein -= ingredient.protein * ingredient.amount;
            recipe.fat -= ingredient.fat * ingredient.amount;
            cb();
          });
      }, next);
    };

    let ingredientsList = [];
    let amounts = [];

    // needs to edit ingredients if necessary (only amount can be edited)
    // needs to add/delete ingredients

    // if ingredient is not already there, add.
    let checkIngredients = next => {
      let addlist = attrs.ingredients.filter(i => !(recipe.ingredients.find(e => e.ndbno == i.ndbno)));

      addlist.forEach(key => {
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
            console.log(addlist, attrs.ingredients.length, 99444499, recipe.ingredients.length);
            lib.recipes.addIngredient(
              recipe_id,
              ingredient.ndbno,
              ingredient.amount,
              (err, res) => {
                console.log(err, res, 5555);
                if (err) {
                  return next(err);
                }
                key.id = res.id;
              });
            recipe.calories += ingredient.calories * ingredient.amount;
            recipe.cabs += ingredient.cabs * ingredient.amount;
            recipe.protein += ingredient.protein * ingredient.amount;
            recipe.fat += ingredient.fat * ingredient.amount;
          });
      });

      next();
    };

    let setRecipe = (next) => {
      lib.recipes.getDetail(
        recipe_id,
        (err, res) => {
          console.log(res.ingredients.length, 933399);
        });
      lib.recipes.set(
        recipe_id,
        attrs, (err) => {
          next(err);
        });
    };

    // // add new ingredients
    // // for each ingredient in the new list, check it's id against : get recipe_ingredient list for this recipe.

    // // remove unused ingredients.
    // // for each ingredient in the recipe_ingredient list, check it's id agianst the ingredients in the new_ingredients list.
    // // if the ingredient id is not found, remove.

    // // now need to add into recipe_ingredients table or edit existing entries.
    // // fuck it just set the whole thing to whatever the new recipe has.

    // let linkIngredients = next => {
    //   ingredientsList.forEach(ingredient => {
    //     lib.recipe.getIngredient(
    //       recipe_id, ingredient.id,
    //       (err, res) => {
    //         if (err || !res) {
    //           return (Error('Could not get ingredient?'));
    //         }
    //         if (!res) {
    //           // ingredient link could not be found. make it.
    //           lib.recipes.addIngredient(
    //             recipe_id,
    //             ingredient.id,
    //             ingredient.amount,
    //             (err, res) => {
    //               if (err) {
    //                 return next(err);
    //               }
    //             }
    //           );
    //         } else {
    //           // edit exisiting ingredient.
    //           lib.recipe.setIngredient(
    //             recipe_id,
    //             ingredient.id,
    //             ingredient.amount,
    //             (err, res) => {
    //               if (err) {
    //                 done(Error('Could not edit ingredient_recipe tabe.'));
    //               }
    //             });
    //         }
    //       });
    //   });
    //   next();
    // };

    async.series([
      checkUser,
      getRecipe,
      checkValid,
      remove,
      checkIngredients,
      setRecipe
      // linkIngredients
    ], (err) => {
      lib.recipes.getDetail(
        recipe_id,
        (err, res) => {
          done(err, res);
        });
    });
  };
};
