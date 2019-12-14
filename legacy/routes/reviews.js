'use strict';

module.exports = (app, api) => {
  // curl -X PUT  http://localhost:3002/api/recipes/1/reviews/3 -H "Content-Type: application/json"  -d  "{\"recipe_id\":1,\"memberno\": 2, \"likes\":1, \"content\": \"This recipe looks fantastic..\"}";

  app.put('/api/recipes/:recipeid/reviews/:id', function (req, res) {
    api.reviews.set(
      req.params.id,
      req.body,
      (err, review) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send(review);
      });
  });

  // curl -X POST  http://localhost:3002/api/recipes/1/reviews/create -H "Content-Type: application/json"  -d  "{\"recipe_id\":1,\"memberno\": 2, \"likes\":1, \"content\": \"This recipe looks fantastic. I really need to try it.\"}";

  app.post('/api/recipes/:id/reviews/create', function (req, res) {
    api.reviews.add(
      req.params.id,
      req.body,
      (err, review) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send(review);
      });
  });

  app.delete('/api/users/:userid/reviews/:id', function (req, res) {
    api.reviews.del(
      req.params.userid,
      req.params.id,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });
};
