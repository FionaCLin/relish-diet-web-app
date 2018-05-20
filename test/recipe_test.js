'use strict';
let data = require('../data.js');
let async = require('async');

let lib, api;

let users = data().users;
let recipes = data().recipes;
exports.lib_recipes = {

  'boot': (test) => {
    var config = require('../config')(process.env.NODE_ENV);
    api = require('../api' )(config);
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
    lib.recipes.add(
      recipes[0],
      (err, res) => {
        test.equal(recipes[0].user_id, res.memberno);
        test.equal(recipes[0].name, res.name);
        test.equal(recipes[0].method, res.method);
        test.equal(recipes[0].duration, res.duration);
        recipes[0].id = res.id;
        res.ingredients = recipes[0].ingredients;
        res.reviews = recipes[0].reviews;
        recipes[0] = res;
        test.done();
      });
  },

  'add recipe2': (test) => {
    recipes[1].user_id = 1;
    lib.recipes.add(
      recipes[1],
      (err, res) => {
        test.equal(recipes[1].user_id, res.memberno);
        test.equal(recipes[1].name, res.name);
        test.equal(recipes[1].method, res.method);
        test.equal(recipes[1].duration, res.duration);
        recipes[1].id = res.id;
        res.ingredients = recipes[1].ingredients;
        res.reviews = recipes[1].reviews;
        recipes[1] = res;
        test.done();
      });
  },

  'add recipe1 ingredients': (test) => {
    async.forEach(recipes[0].ingredients, (i, cb) => {
      lib.recipes.addIngredient(recipes[0].id,
        i.ndbno,
        i.amount,
        (err, res) => {
          i.id = res.id;
          cb();
        });
    }, test.done);
  },
  'add recipe\'s reveiws': (test) => {
    lib.bookmarks.add(

    );
  },
  'add recipe2 ingredients': (test) => {
    async.forEach(recipes[1].ingredients, (i, cb) => {
      lib.recipes.addIngredient(
        recipes[1].id,
        i.ndbno,
        i.amount,
        (err, res) => {
          i.id = res.id;
          cb();
        });
    }, test.done);
  },
  'get recipe detail': (test) => {
    lib.recipes.getDetail(
      recipes[0].id,
      (err, res) => {
        test.equal(res.id, recipes[0].id);
        test.done();
      });
  },

  'get recipe by user': (test) => {
    lib.recipes.getByUser(
      users[0].id,
      (err, res) => {
        test.equal(res.length, 2);
        test.done();
      });
  },

  'get all recipes ': (test) => {
    lib.recipes.getAll(
      (err, res) => {
        test.equal(res.length, 2);
        test.done();
      });
  },

  'bookmark recipe 1 by user2': (test) => {

  },

  'quit-lib': (test) => {
    lib.quit(test.done);
  },

  'quit-api': (test) => {
    api.quit(test.done);
  }

};
