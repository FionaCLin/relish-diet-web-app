'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  // adds an active user with a username and password if provided

  // if username not provided, uses email add username

  api.recipes.add = (attrs, done) => {
    var recipe;

    // whitelist attrs
    var keys = [
      'name',
      'images'
      'ingredients',
      'method',
      'duration',
      'rate',
      'creator_id'
    ];

    attrs = _.pick(attrs, keys);

    // if (!attrs.hasOwnProperty('username') || !attrs.username) {
    //   return done(new Error('No username or email address prvoided'));
    // }

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
          recipe = res;
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

    // var checkIngredients = (next) => {
    //   lib.ingredients.getByName(
    //
    //   )
    // }

    /**
      For each ingredient_id in the array, make a new ingredients table row
      incs ingredientID, recipe, and amount.
    **/


    async.series([
      checkUser
      create
    ], (err) => {
      done(err, user);
    });
  };
};
