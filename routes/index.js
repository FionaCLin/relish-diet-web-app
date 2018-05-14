const express = require('express');
let router = express.Router();

module.exports = (config, opts) => {
  config = config || {};

  opts = opts || {
    nickname: 'user'
  };


  let api = require('../api')(config);
  let lib = api.lib;


  // user
  router.get('/api/users/', api.users.get);
  // router.post('/api/users', api.createUser);
  // router.put('/api/users/:id', api.updateUser);
  // router.delete('/api/users/:id', api.removeUser);

  // application -------------------------------------------------------------
  router.get('/', function (req, res) {
    res.render('index', {title: 'node-postgres-promises'});
  });

  return router;
};
