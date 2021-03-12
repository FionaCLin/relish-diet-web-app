'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.dashboards.search = (user_id, keyword, done) => {
    let recipe, user;

    let checkUser = next => {
      lib.users.get(user_id, (err, res) => {
        if (err || !res) {
          return next(new Error('unknown user'));
        }
        user = res;
        next(err);
      });
    };

    let getRecipe = (next) => {
      lib.recipes.search(
        keyword,
        (err, res) => {
          if (!res) {
            return next(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };
    async.series([
      checkUser,
      getRecipe
    ], (err) => {
      done(err, recipe);
    });
  };
};
