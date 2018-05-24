'use strict';

module.exports = (app, api) => {
  // recipe
  // recipe details
  app.get('/api/recipes/:id', function (req, res) {
    api.recipes.getDetails(
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
    req.body;
    api.recipes.add({
      name: req.body.name,
      creatorId: req.body.creator
      // images'
      // ingredients':
      // method':
      // duration':
      // rate':
      // creatorI:
      // ... find those field that map to our api keys
    },
      (err, recipe) => {
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

  // can we delete a recipes??
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
