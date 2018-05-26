'use strict';
let data = require('./data.js');
let _ = require('lodash');

let lib, api;

let users = data().users;
exports.lib_users = {

  'boot': (test) => {
    var config = require('../config')(process.env.NODE_ENV);
    api = require('../api')(config);
    lib = api.lib;
    test.done();
  },

  'reset': (test) => {
    lib.reset(true, () => {
      test.done();
    });
  },

  'add': (test) => {
    api.users.add(
      users[0],
      (err, res) => {
        test.equal(res.username, users[0].username);
        test.equal(res.email, users[0].email);
        test.equal(res.namefamily, users[0].nameFamily);
        test.equal(res.namegiven, users[0].nameGiven);
        users[0].id = res.id;
        users[0].gender = 'G';
        test.done();
      });
  },

  'auth': (test) => {
    api.users.auth(
      users[0].email,
      '123',
      (err, res) => {
        test.equal(res.username, users[0].username);
        test.equal(res.email, users[0].email);
        test.equal(res.namefamily, users[0].nameFamily);
        test.equal(res.namegiven, users[0].nameGiven);
        test.done();
      });
  },

  'update': (test) => {
    api.users.set(
      users[0].id,
      users[0],
      (err, res) => {
        lib.users.get(
          users[0].id,
          (err, res) => {
            test.ok(res.hasOwnProperty('token'));
            test.equal(res.username, users[0].username);
            test.equal(res.email, users[0].email);
            test.equal(res.namefamily, users[0].nameFamily);
            test.equal(res.namegiven, users[0].nameGiven);
            test.equal(res.gender, users[0].gender);
            test.equal(res.goal, users[0].goal);
            test.equal(res.carolies_goal, users[0].carolies_goal);
            test.done();
          });
      });
  },

  'quit-lib': (test) => {
    lib.quit(test.done);
  }

};
