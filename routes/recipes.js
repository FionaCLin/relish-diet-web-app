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
      curl -X POST  http://localhost:3002/api/recipes/create -H "Content-Type: application/json"  -d "{\"name\":\"Chicken and Broccoli\", \"method\":\"1. do this, 2. do that\", \"duration\":40, \"rate\":0, \"creatorID\":\"1\"}"
      'method',
      this format for that are taken as number not string
      \"duration\":40, \"rate\":0,
      //'duration',
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
    api.recipes.add(
      req.body,
      (err, recipe) => {
        if (err) {
          console.log(err.message, req.body.creator);
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipe);
      });
  });

  /*
  curl -X PUT http://localhost:3002/api/users/1/recipes/6 -H "Content-Type: application/json" -d "{\"ingredients\":[{\"ndbno\":1,\"name\":\"olive oil\",\"uom\":\"tablespoon\",\"calories\":48,\"protein\":0,\"cabs\":0,\"fat\":5.6,\"amount\":2},{\"ndbno\":2,\"name\":\"diced red onions\",\"uom\":\"cup\",\"calories\":7,\"protein\":0.15,\"cabs\":1.62,\"fat\":0.01,\"amount\":0.5},{\"ndbno\":3,\"name\":\"garlic\",\"uom\":\"clove\",\"calories\":4,\"protein\":0,\"cabs\":1,\"fat\":0,\"amount\":1},{\"ndbno\":7,\"name\":\"cheddar cheese\",\"uom\":\"g\",\"calories\":60,\"protein\":4,\"cabs\":0.2,\"fat\":5,\"amount\":15},{\"ndbno\":4,\"name\":\"kidney beans drained\",\"uom\":\"can\",\"calories\":350,\"protein\":1.5,\"cabs\":65,\"fat\":0.9,\"amount\":0.25},{\"ndbno\":5,\"name\":\"diced green chili peppers\",\"uom\":\"can\",\"calories\":8,\"protein\":0.28,\"cabs\":1.7,\"fat\":0.1,\"amount\":0.25},{\"ndbno\":8,\"name\":\"whole grain bun\",\"uom\":null,\"calories\":150,\"protein\":6,\"cabs\":26,\"fat\":1.5,\"amount\":1},{\"ndbno\":6,\"name\":\"fresh corn\",\"uom\":\"g\",\"calories\":17,\"protein\":0.64,\"cabs\":3.8,\"fat\":0.24,\"amount\":20}]}"
  */

  app.put('/api/users/:userid/recipes/:id', function (req, res) {
    api.recipes.set(
      req.params.userid,
      req.params.id,
      req.body,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send(recipe);
      });
  });

  // curl -X DELETE http://localhost:3002/api/recipes/6 -H "Content-Type: application/json"
  app.delete('/api/recipes/:id', function (req, res) {
    api.recipes.del(
      req.params.id,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });
};
