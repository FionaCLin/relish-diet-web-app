'use strict';
let data = require('./data.js');
let async = require('async');

let lib, api;

let users = data().users;
let recipes = data().recipes;
let mealplan1;
let mealplan2;
exports.mealplan_test = {

  'boot': (test) => {
    var config = require('../config')(process.env.NODE_ENV);
    api = require('../api')(config);
    lib = api.lib;
    test.equal(lib.users.hasOwnProperty('get'), true);
    test.done();
  },

  'reset': (test) => {
    lib.reset(true, () => {
      test.done();
    });
  },

  'add user1s': (test) => {
    api.users.add(
      users[0],
      (err, res) => {
        test.equal(res.email, users[0].email);
        users[0].id = res.id;
        test.done();
      });
  },
  'add user2s': (test) => {
    api.users.add(
      users[1],
      (err, res) => {
        test.equal(res.email, users[1].email);
        users[1].id = res.id;
        test.done();
      });
  },
  'add user3s': (test) => {
    api.users.add(
      users[2],
      (err, res) => {
        test.equal(res.email, users[2].email);
        users[2].id = res.id;
        test.done();
      });
  },

  'add ingredients': (test) => {
    let c = 1;
    async.forEach(recipes, (recipe, cb) => {
      async.forEach(recipe.ingredients, (i, cb) => {
        i.ndbno = c++;
        lib.ingredients.add(
          i,
          (err, res) => {
            test.equal(res.ndbno, i.ndbno);
            test.equal(res.name, i.name);
            test.equal(res.uom, i.uom);
            test.equal(res.cabs, i.cabs);
            test.equal(res.protein, i.protein);
            test.equal(res.fat, i.fat);
            test.equal(res.calories, i.calories);
          });
        cb();
      });
      cb();
    }, test.done);
  },

  'add recipe1': (test) => {
    recipes[0].user_id = 1;
    recipes[0].creatorID = 1; // for api
    api.recipes.add(
      recipes[0],
      (err, res) => {
        test.equal(recipes[0].user_id, res.memberno);
        test.equal(recipes[0].name, res.name);
        test.equal(recipes[0].method, res.method);
        test.equal(recipes[0].duration, res.duration);
        test.equal(recipes[0].ingredients.length, res.ingredients.length); // for api
        recipes[0].id = res.id;
        // res.ingredients = recipes[0].ingredients;
        // res.reviews = recipes[0].reviews;
        // recipes[0] = res;
        test.done();
      });
  },

  'add recipe2': (test) => {
    recipes[1].user_id = 1;
    recipes[1].creatorID = 1; // for api??
    api.recipes.add(
      recipes[1],
      (err, res) => {
        test.equal(recipes[1].user_id, res.memberno);
        test.equal(recipes[1].name, res.name);
        test.equal(recipes[1].method, res.method);
        test.equal(recipes[1].duration, res.duration);
        test.equal(recipes[1].ingredients.length, res.ingredients.length); // for api
        recipes[1].id = res.id;
        // res.ingredients = recipes[1].ingredients;
        // res.reviews = recipes[1].reviews;
        // recipes[1] = res;
        test.done();
      });
  },
  'add mealplan1': test => {
    mealplan1 = {
      user_id: users[0].id,
      title: 'to lost weight'
    };
    api.mealplans.add(
      mealplan1,
      (err, res) => {
        test.equal(res.title, mealplan1.title);
        mealplan1.id = res.id;
        test.done();
      });
  },
  'add mealplan2': test => {
    mealplan2 = {
      user_id: users[0].id,
      title: 'gain weight'
    };
    api.mealplans.add(
      mealplan2,
      (err, res) => {
        test.equal(res.title, mealplan2.title);
        mealplan2.id = res.id;
        test.done();
      });
  },
  'get mealplan1': test => {
    api.mealplans.get(
      mealplan1.id,
      (err, res) => {
        test.equal(res.title, mealplan1.title);
        test.done();
      }
    );
  },
  'update mealplan': test => {
    mealplan1.title1 = 'gain weight';
    api.mealplans.set(
      mealplan1.id,
      mealplan1,
      (err, res) => {
        test.equal(res.title, mealplan1.title);
        mealplan1.id = res.id;
        test.done();
      });
  },
  'del mealplan1': test => {
    api.mealplans.del(
      mealplan1.id,
      (err, res) => {
        test.ok(!(err instanceof Error));
        lib.mealplans.get(
          mealplan1.id,
          (err, res) => {
            test.ok(!res);
            test.done();
          });
      });
  },
  'add timeslot': test => {
    mealplan2.timeslots = [{
      recipe_id: 1,
      day: 'MON',
      mealtimes: 'BREKKIE'
    }, {
      recipe_id: 2,
      day: 'TUE',
      mealtimes: 'BREKKIE'
    }, {
      recipe_id: 1,
      day: 'WED',
      mealtimes: 'BREKKIE'
    }];
    async.forEach(mealplan2.timeslots,
      (timeslot, cb) => {
        timeslot.plan_id = mealplan2.id;
        api.timeslots.add(
          timeslot,
          (err, res) => {
            test.equal(res.recipe_id, timeslot.recipe_id);
            test.equal(res.day, timeslot.day);
            test.equal(res.meal_type, timeslot.mealtimes);
            timeslot.id = res.id;
            cb();
          });
      }, test.done);
  },
  'remove timeslot': test => {
    let timeslot = mealplan2.timeslots.pop();
    api.timeslots.del(
      timeslot.id,
      (err, res) => {
        lib.timeslots.get(
          timeslot.id,
          (err, res) => {
            test.ok(!res);
            test.done();
          });
      });
  },
  'get timesoles by plan id': test => {
    api.timeslots.getByPlan(
      mealplan2.id,
      (err, res) => {
        test.equal(res.length, mealplan2.timeslots.length);
        test.done();
      });
  },
  'quit-lib': (test) => {
    lib.quit(test.done);
  },

  'quit-api': (test) => {
    api.quit(test.done);
  }

};
