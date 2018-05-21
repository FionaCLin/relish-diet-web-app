'use strict';

module.exports = (app, api) => {



  app.put('/api/recipes/:id/reviews/:id', function (req, res) {
    // api.reviews.edit(

    // )
  });

  // curl - vX POST  http://localhost:3002/api/recipes/1/reviews -H "Content-Type: application/json"  -d  "{\"user_id\": 2, \"likes\":1, \"content\": \"This recipe looks fantastic. I really need to try it.\"}";

  // get the payload with req.body
  app.post('/api/reviews/create', function (req, res) {
    api.reviews.add(
      req.body,
      (err, recipe) => {
        console.log(err);
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

  /*   curl - vX PUT http://localhost:3002/api/reviews/1 -H "Content-Type: application/json" -d "{\"email\":\"fiona@freshfridge.com\"}"
   */

  app.put('/api/reviews/:id', function (req, res) {
    api.reviews.set(
      req.params.id,
      req.body,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

  // can we delete a reviews??
  app.delete('/api/reviews/:id', function (req, res) {
    api.reviews.del(
      req.params.id,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });
};
