'use strict';

module.exports = (app, api) => {

  // recipe
  app.get('/api/recipes/:id', function (req, res) {
    api.recipes.get(
      req.params.id,
      (err, recipe) => {
        res.send(recipe);
      });
  });

  /*
      curl - vX POST  http://localhost:3002/api/login -H "Content-Type: application/json"  -d "{\"email\":\"kkk@freshfridge.com\",\"recipename\":\"hahai\",\"password\":\"123\",\"nameGiven\":\"fiona\", \"nameFamily\":\"lin\", \"birthday\":\"01-01-2000\",\"gender\":\"F\",\"goal\":\"lose weight\"}"
      curl -vX POST  http://localhost:3002/api/recipes/create -H "Content-Type: application/json"  -d "{\"name\":\"Chicken and Broccoli\", \"method\":\"1. do this, 2. do that\", \"duration\":\"40\", \"rate\":\"0\", \"creatorID\":\"1\"}"
      'method',
      'duration',
      // 'calories',
      // 'protein',
      // 'carbs',
      // 'fat',
      'rate',
      'creatorID',

  */
 // "{\"name\":\"Chicken and Broccoli\", \"method\":\"1. do this, 2. do that\", \"duration\":\"40\", \"rate\":\"0\", \"creatorID\":\"1\"}"

  // get the payload with req.body
  app.post('/api/recipes/create', function (req, res) {
    api.recipes.add(
      req.body,
      (err, recipe) => {
        console.log(err);
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

  /*   curl - vX PUT http://localhost:3002/api/recipes/1 -H "Content-Type: application/json" -d "{\"email\":\"fiona@freshfridge.com\"}"
   */

  app.put('/api/recipes/:id', function (req, res) {
    api.recipes.set(
      req.params.id,
      req.body,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

/*
 curl - vX POST  http://localhost:3002/api/recipes/login -H "Content-Type: application/json"  -d "{\"email\":\"kkk@freshfridge.com\",\"password\":\"123\"}"
 */
 // ??
  app.post('/api/recipes/login', function (req, res) {
    api.recipes.auth(
      req.body.email,
      req.body.password,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

  app.delete('/api/recipes/:id', function (req, res) {
    api.recipes.del(
      req.params.id,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

};
