'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  let lib = opts.lib;
  let api = opts.api;

  api.dashboards.getWithGoal = (user_id, attrs, done) => {
    let recipes, user, recipe;
    let keys = [
      'calories',
      'cabs',
      'fats',
      'protein',
      'sodium'
    ];

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
      lib.recipes.getAll(
        (err, res) => {
          if (!res) {
            return next(new Error('unknown recipe'));
          }
          recipe = res;
          next(err);
        });
    };

    // let attrs = [
    //   [300, 14, NaN, NaN, NaN],
    //   [1000, 1000, 1000, 1000, 1000],
    //   [600, 16, NaN, 26, NaN],
    //   [700, 45, NaN, NaN, NaN],
    //   [500, NaN, NaN, NaN, NaN]
    // ];
    // const goals = [{
    //   calories: 100,
    //   cabs: NaN,
    //   fats: 10,
    //   protein: 1,
    //   sodium: 4
    // },{
    //   calories: NaN,
    //   cabs: NaN,
    //   fats: 10,
    //   protein: 1,
    //   sodium: 4
    // }];

    // Energy: goals[0]
    // g.carbs: goals[1]
    // g.protein: goals[2]
    // g.fats: goals[3]
    // g.sodium: goals[4]
    // let filter = next => {
    //   recipe.forEach(re => {

    //   });
    // };

    async.series([
      checkUser,
      getRecipe
    ], (err) => {
      done(err, recipes);
    });
  };
};
