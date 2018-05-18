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
      'ingredients', //[{[name, calories, fat, protein, carbs, recipeID]},{},{},{}]
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

    //get user id? for to validate

    async.series([
      create
    ], (err) => {
      done(err, user);
    });
  };
};
