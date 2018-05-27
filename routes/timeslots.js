'use strict';

module.exports = (app, api) => {
  // timeslot details
  app.get('/api/mealplans/:id/timeslots', function (req, res) {
    api.timeslots.getByPlan(
      req.params.id,
      (err, timeslot) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(timeslot);
      });
  });

  /*
      curl -X POST  http://localhost:3002/api/timeslot/create -H "Content-Type: application/json"  -d
      "{\"plan_id\":\"\",\"day\":\"\",\"recipe_id\":\"\","{\"mealtime\":\"\"}"
  */

  app.post('/api/timeslots/create', function (req, res) {
    api.timeslots.add(
      req.body,
      (err, timeslot) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(timeslot);
      });
  });

  /*   curl -X DELETE  http://localhost:3002/api/timeslot/:id  */
  app.delete('/api/timeslots/:id', function (req, res) {
    api.timeslots.del(
      req.params.id,
      (err, timeslot) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });
};
