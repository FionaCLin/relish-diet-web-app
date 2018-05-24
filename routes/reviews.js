'use strict';

module.exports = (app, api) => {
  app.put('/api/recipes/:recipeid/reviews/:id', function (req, res) {
    let comment = req.body;
    comment.recipe_id = req.params.recipeid;
    comment.review_id = req.params.id;

    api.reviews.edit(
      comment,
      (err, review) => {
        console.log(review);
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send(review);
      });
  });

  // curl - vX POST  http://localhost:3002/api/recipes/1/reviews -H "Content-Type: application/json"  -d  "{\"user_id\": 2, \"likes\":1, \"content\": \"This recipe looks fantastic. I really need to try it.\"}";

  // get the payload with req.body
  app.post('/api/recipes/:id/reviews/create', function (req, res) {
    api.reviews.add(
      req.body,
      (err, review) => {
        console.log(review);
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send(review);
      });
  });

  app.delete('/api/reviews/:id', function (req, res) {
    api.reviews.del(
      req.params.id,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });
};
