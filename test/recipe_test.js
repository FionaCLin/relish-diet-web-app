'use strict';
let data = require('./data.js');
let async = require('async');

let lib, api;

let users = data().users;
let recipes = data().recipes;
let reviewsCount = 0;
let ingredient_rm;
exports.recipes = {

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
    users.pop();
    users.pop();
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
    recipes[0].images = './images/apple.js';
    api.recipes.add(
      recipes[0],
      (err, res) => {
        test.equal(recipes[0].user_id, res.memberno);
        test.equal(recipes[0].name, res.name);
        test.equal(recipes[0].method, res.method);
        test.equal(recipes[0].sodium, res.sodium);
        test.equal(recipes[0].fat, res.fat);
        test.equal(recipes[0].calories, res.calories);
        test.equal(recipes[0].protein, res.protein);
        test.equal(recipes[0].cabs, res.cabs);
        test.equal(recipes[0].ingredients.length, res.ingredients.length); // for api
        recipes[0].id = res.id;
        // res.ingredients = recipes[0].ingredients;
        // res.reviews = recipes[0].reviews;
        // recipes[0] = res;
        test.done();
      });
  },

  //   // 'add recipe2': (test) => {
  //   //   recipes[1].user_id = 1;
  //   //   recipes[1].creatorID = 1; // for api??
  //   //   api.recipes.add(
  //   //     recipes[1],
  //   //     (err, res) => {
  //   //       test.equal(recipes[1].user_id, res.memberno);
  //   //       test.equal(recipes[1].name, res.name);
  //   //       test.equal(recipes[1].method, res.method);
  //   //       test.equal(recipes[1].duration, res.duration);
  // //       test.equal(recipes[1].ingredients.length, res.ingredients.length); // for api
  // //       recipes[1].id = res.id;
  // //       // res.ingredients = recipes[1].ingredients;
  // //       // res.reviews = recipes[1].reviews;
  // //       // recipes[1] = res;
  // //       test.done();
  // //     });
  // // },
  'add recipes': (test) => {
    async.forEach(recipes, (recipe, cb) => {
      recipe.user_id = 1;
      recipe.creatorID = 1; // for api??
      recipe.images = (Math.floor(Math.random() * 4) % 2) ? 'apple.js' : 'images/cake.js';
      recipe.calories = Math.floor(Math.random() * 100 + 100) * recipe.calories;
      api.recipes.add(
        recipe,
        (err, res) => {
          test.equal(recipe.user_id, res.memberno);
          test.equal(recipe.name, res.name);
          test.equal(recipe.method, res.method);
          test.equal(recipe.sodium, res.sodium);
          test.equal(recipe.ingredients.length, res.ingredients.length); // for api
          recipe.id = res.id;
          // res.ingredients = recipes[1].ingredients;
          // res.reviews = recipes[1].reviews;
          // recipes[1] = res;
          cb();
        });
    }, test.done);
  },

  // // 'add recipe1 ingredients': (test) => {
  // //   async.forEach(recipes[0].ingredients, (i, cb) => {
  // //     lib.recipes.addIngredient(recipes[0].id,
  // //       i.ndbno,
  // //       i.amount,
  // //       (err, res) => {
  // //         i.id = res.id;
  // //         cb();
  // //       });
  // //   }, test.done);
  // // },
  // 'add recipe1 reviews': (test) => {
  //   async.forEach(
  //     recipes[0].reviews,
  //     (r, cb) => {
  //       r.recipe_id = recipes[0].id;
  //       r.memberno = Number(users[Math.floor(Math.random() * users.length)].id);
  //       api.reviews.add(
  //         recipes[0].id,
  //         r,
  //         (err, res) => {
  //           r.id = res.id;
  //           cb();
  //         });
  //     }, test.done);
  // },
  // 'get all ingredients': test => {
  //   lib.recipes.getAllIngredients(
  //     recipes[0].id,
  //     (err, res) => {
  //       test.equal(res.length, recipes[0].ingredients.length);
  //       test.done();
  //     });
  // },
  // 'remove recipe ingredient': test => {
  //   ingredient_rm = recipes[0].ingredients.pop();
  //   api.recipes.set(
  //     users[0].id,
  //     recipes[0].id,
  //     recipes[0],
  //     (err, res) => {
  //       test.equal(res.ingredients.length, recipes[0].ingredients.length);
  //       test.done();
  //     });
  // },
  // 'add recipe ingredient': test => {
  //   recipes[0].ingredients.push(ingredient_rm);
  //   api.recipes.set(
  //     users[0].id,
  //     recipes[0].id,
  //     recipes[0],
  //     (err, res) => {
  //       test.equal(res.ingredients.length, recipes[0].ingredients.length);
  //       test.done();
  //     });
  // },
  'search by keyword ap': test => {
    // lib.recipes.search(
    //   'app',
    api.dashboards.search(
      users[0].id,
      'app',
      (err, res) => {
        test.equal(res.length, 4);
        test.done();
      });
  },
  'update recipe name, method, duration': test => {
    recipes[0].name = recipes[0].name + ' yummy';
    recipes[0].method = recipes[0].method + 'do it twice';
    api.recipes.set(
      users[0].id,
      recipes[0].id,
      recipes[0],
      (err, res) => {
        test.equal(res.name, recipes[0].name);
        test.equal(res.duration, recipes[0].duration);
        test.equal(res.method, recipes[0].method);
        test.equal(res.ingredients.length, recipes[0].ingredients.length);
        test.done();
      });
  },
  'test dashboad with goal': test => {
    api.dashboards.getWithGoal(
      users[0].id,
      [{
        calories: 100,
        cabs: NaN,
        fats: NaN,
        protein: NaN,
        sodium: NaN
      }],
      (err, res) => {
        test.done();
      });
  },

  // 'set reviews by recipes': (test) => {
  //   recipes[0].reviews[0].likes = 10;
  //   recipes[0].reviews[0].review_id = recipes[0].reviews[0].id;
  //   api.reviews.set(
  //     users[1].id,
  //     recipes[0].reviews[0],
  //     (err, res) => {
  //       test.equal(res.likes, recipes[0].reviews[0].likes);
  //       test.done();
  //     });
  // },
  // // 'add recipe2 ingredients': (test) => {
  // //   async.forEach(recipes[1].ingredients, (i, cb) => {
  // //     lib.recipes.addIngredient(
  // //       recipes[1].id,
  // //       i.ndbno,
  // //       i.amount,
  // //       (err, res) => {
  // //         i.id = res.id;
  // //         cb();
  // //       });
  // //   }, test.done);
  // // },
  // // 'get recipe detail': (test) => {
  // //   lib.recipes.getDetail(
  // //     recipes[0].id,
  // //     (err, res) => {
  // //       test.equal(res.id, recipes[0].id);
  // //       test.done();
  // //     });
  // // },
  // /* wait for the api recipes add done to test fetch the recipes  */
  // // 'get recipe by user': (test) => {
  // //   lib.recipes.getByUser(
  // //     users[0].id,
  // //     (err, res) => {
  // //       test.equal(res.length, 2);
  // //       test.done();
  // //     });
  // // },

  // // 'get all recipes ': (test) => {
  // //   lib.recipes.getAll(
  // //     (err, res) => {
  // //       test.equal(res.length, 2);
  // //       test.done();
  // //     });
  // // },

  // 'get all recipes ': (test) => {
  //   api.recipes.getDashboard(
  //     users[0].id,
  //     (err, res) => {
  //       test.equal(res.length, recipes.length);
  //       test.done();
  //     });
  // },
  // 'get 0 bookmark by user2': (test) => {
  //   api.bookmarks.getByUser(
  //     users[1].id,
  //     (err, res) => {
  //       test.ok(!(err instanceof Error));
  //       test.equal(res.length, 0);
  //       test.done();
  //     });
  // },
  // 'bookmark recipes by user2': (test) => {
  //   async.forEach(recipes, (r, cb) => {
  //     api.bookmarks.add(
  //       users[1].id,
  //       r.id,
  //       (err, res) => {
  //         test.ok(!(err instanceof Error));
  //         cb();
  //       });
  //   }, (err, res) => {
  //     api.bookmarks.getByUser(
  //       users[1].id,
  //       (err, res) => {
  //         test.equal(res.length, recipes.length);
  //         test.done();
  //       }
  //     );
  //   });
  // },
  // 'delete bookmark by id': (test) => {
  //   api.bookmarks.del(
  //     users[1].id,
  //     1,
  //     (err, res) => {
  //       test.ok(!(err instanceof Error));
  //       lib.bookmarks.get(
  //         1,
  //         (err, res) => {
  //           test.ok(!(err instanceof Error));
  //           test.ok(!res);
  //           test.done();
  //         });
  //     });
  // },
  'quit-lib': (test) => {
    lib.quit(test.done);
  },

  'quit-api': (test) => {
    api.quit(test.done);
  }

};
