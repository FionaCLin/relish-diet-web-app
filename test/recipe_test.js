'use strict';
let data = require('../data.js');
let _ = require('lodash');

let lib, api;

let users = data().users;
let recipes = data().recipes;
exports.lib_recipes = {

  'boot': (test) => {
    var config = require('../config')(process.env.NODE_ENV);
    console.log(process.env.NODE_ENV, config);
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

  'add recipe1': (test) => {
    recipes[0].user_id = 1;
    lib.recipes.add(
      recipes[0],
      (err, res) => {
        test.equal(recipes[0].user_id, res.memberno);
        test.equal(recipes[0].name, res.name);
        test.equal(recipes[0].method, res.method);
        test.equal(recipes[0].duration, res.duration);
        console.log(err, res);
        test.done();
      });
  },
  'add recipe ingredient': (test) =>{

  },
  'quit-lib': (test) => {
    lib.quit(test.done);
  },

  'quit-api': (test) => {
    api.quit(test.done);
  }

};
