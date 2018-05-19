'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  // adds an active user with a username and password if provided

  // if username not provided, uses email add username

  api.ingredients.add = (attrs, done) => {
    let recipe;

    // whitelist attrs
    let keys = [
      'name',
      // 'images'
      // 'ingredients', //[{[name, calories, fat, protein, carbs, recipeID]},{},{},{}]
      'method',
      'duration',
      // 'calories',
      // 'protein',
      // 'carbs',
      // 'fat',
      'rate',
      'creatorID',
    ];

    attrs = _.pick(attrs, keys);

    // if (!attrs.hasOwnProperty('username') || !attrs.username) {
    //   return done(new Error('No username or email address prvoided'));
    // }

    let create = (next) => {
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

    let get = (next) => {
      lib.recipes.get(
        user.id,
        (err, res) => {
          if (err) {
            return next(err);
          }
          user = res;
          next();
        });
    };

    async.series([
      add,
      setPassword,
      get
    ], (err) => {
      done(err, user);
    });
  };
};
