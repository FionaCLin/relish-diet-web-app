const express = require('express');
// let router = express.Router();

module.exports = (config, opts) => {
  config = config || {};
  
  opts = opts || {
    nickname: 'user'
  };
  
  let app = opts;
  let api = require('../api')(config);
  let lib = api.lib;
  
  require('./users')(app, api);
  


  // app.post('/api/todos', todosController.create);
  // app.get('/api/todos', todosController.list);
  // app.get('/api/todos/:todoId', todosController.retrieve);
  // app.put('/api/todos/:todoId', todosController.update);
  // app.delete('/api/todos/:todoId', todosController.destroy);

  // app.post('/api/todos/:todoId/items', todoItemsController.create);
  // app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  // app.delete(
  //   '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  // );

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  // app.all('/api/todos/:todoId/items', (req, res) =>
  //   res.status(405).send({
  //     message: 'Method Not Allowed',
  //   }));


  // application -------------------------------------------------------------
  // router.get('/', function (req, res) {
  //   res.render('index', {title: 'node-postgres-promises'});
  // });

};
