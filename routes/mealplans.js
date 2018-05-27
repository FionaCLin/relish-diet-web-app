'use strict';

module.exports = (app, api) => {
  // mealplan details

  // curl -X GET  http://localhost:3002/api/mealplans/:id

  app.get('/api/mealplans/:id', function (req, res) {
    api.mealplans.get(
      req.params.id,
      (err, mealplan) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(mealplan);
      });
  });
  // curl -X GET  http://localhost:3002/api/users/1/mealplans/

  app.get('/api/users/:id/mealplans', function (req, res) {
    api.mealplans.getByUser(
      req.params.id,
      (err, mealplans) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(mealplans);
      });
  });

  /*
    curl -X POST  http://localhost:3002/api/mealplans/create -H "Content-Type: application/json"  -d "{\"title\":\"\",\"user_id\":\"\",\"timeslots:\":[]}"
    eg.:
    curl -X POST  http://localhost:3002/api/mealplans/create -H "Content-Type: application/json"  -d "{\"title\":\"hello\",\"user_id\":\"1\",\"timeslots:\":[]}"

    */

  app.post('/api/mealplans/create', function (req, res) {
    api.mealplans.add(
      req.body,
      (err, mealplan) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(mealplan);
      });
  });

  /*   curl -X PUT http://localhost:3002/api/mealplans/1 -H "Content-Type: application/json" -d "{\"title\":\"\",}" */

  app.put('/api/mealplans/:id', function (req, res) {
    api.mealplans.set(
      req.params.id,
      req.body,
      (err, mealplan) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });

  /*   curl -X DELETE  http://localhost:3002/api/timeslot/:id  */
  app.delete('/api/mealplans/:id', function (req, res) {
    api.mealplans.del(
      req.params.id,
      (err, mealplan) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });
};
