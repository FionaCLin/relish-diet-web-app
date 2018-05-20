"use strict";

var _ = require("lodash");
var async = require("async");

module.exports = opts => {
    var lib = opts.lib;
    var api = opts.api;

    // adds an active user with a username and password if provided

    // if username not provided, uses email add username

    api.recipes.add = (attrs, done) => {
        var recipeID;
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
            "id",
            "name",
            "amount",
            "uom",
            "calories",
            "carbs",
            "protein",
            "fat"
        ];

        let ingredients = [];
        attrs.ingredients.forEach(ingredient => {
            ingredients.push(_.pick(ingredient, ingKeys));
        });

        //check to see if user id is valid in database
        // use lib.users.getbyid
        // if not exisiting, return user not found
        // if existing - create.

        let checkUser = next => {
            lib.users.get(user_id, (err, res) => {
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
        // let ingredients = [{key: 'ndbno', amount: key.amount}] make the ingredient object array,
        let ingredientsList = [];

        let checkIngredients = next => {
            attrs.ingredients.forEach(key => {
                lib.ingredients.get(key, (err, ingredient) => {
                    if (err) {
                        //add ingredient to ingredient table if it does not exist.
                        lib.ingredients.add(key, (err, res) => {
                            ingredient = res;
                        });
                    }
                    ingredientsList.push({
                        id: ingredient.id,
                        amount: key.amount
                    });
                });
            });
        };
        //now i have array for all id of all ingredients. and amounts.

        /**
            For each ingredient_id in the array, make a new ingredients table row
            incs ingredientID, recipe, and amount.
         **/
        var createRecipe = next => {
            attrs.at = Date.now();
            lib.recipes.add(attrs, (err, res) => {
                if (err) {
                    return next(err);
                }
                recipeID = res;
                next();
            });
        };

        // var length = ingredientsList.length();

        let linkIngredients = next => {
            ingredientsList.forEach(ingredient => {
                lib.recipes.addIngredient(
                    recipeID,
                    ingredient.id,
                    ingredient.amount,
                    (err, res) => {
                        if (err) {
                            return next(err);
                        }
                    }
                );
            });
            next();
        };

        async.series(
            [checkUser, checkIngredients, createRecipe, linkIngredients],
            err => {
                lib.recipes.getDetail(recipeID, (err, res) => {
                    done(err, res);
                });
            }
        );
    };
};
