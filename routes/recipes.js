'use strict';

module.exports = (app, api) => {
  // recipe
  // recipe details
  // curl -X GET  http://localhost:3002/api/recipe/1
  app.get('/api/recipes/:id', function (req, res) {
    console.log(req.params.id);
    api.recipes.get(
      req.params.id,
      (err, recipe) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipe);
      });
  });

  /*
      curl -X POST  http://localhost:3002/api/login -H "Content-Type: application/json"  -d "{\"email\":\"kkk@freshfridge.com\",\"recipename\":\"hahai\",\"password\":\"123\",\"nameGiven\":\"fiona\", \"nameFamily\":\"lin\", \"birthday\":\"01-01-2000\",\"gender\":\"F\",\"goal\":\"lose weight\"}"
      curl -X POST  http://localhost:3002/api/recipes/create -H "Content-Type: application/json"  -d "{\"name\":\"Chicken and Broccoli\", \"method\":\"1. do this, 2. do that\", \"duration\":\"40\", \"rate\":\"0\", \"creatorID\":\"1\"}"
      'method',
      'duration',
      // 'calories',
      // 'protein',
      // 'carbs',
      // 'fat',
      // 'rate',
      // 'creatorID',

  */

  // get the payload with req.body
  app.post('/api/recipes/create', function (req, res) {
    req.body;
    console.log(req.body);
    api.recipes.add({
      name: req.body.name,
      creatorID: req.body.creator,
      ingredients: req.body.ingredients,
      method: req.body.method,
      calories: req.body.calories,
      carbs: req.body.carbs,
      protein: req.body.protein,
      fat: req.body.fat,
      duration: 40
    },
      (err, recipe) => {
        if (err) {
          console.log(err.message, req.body.creator);
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipe);
      });
  });

  /*   curl -X PUT http://localhost:3002/api/sers/1/recipes/1 -H "Content-Type: application/json" -d "{\"email\":\"fiona@freshfridge.com\"}"
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
