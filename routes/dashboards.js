'use strict';

module.exports = (app, api) => {
  app.get('/api/users/:id/dashboard', function (req, res) {
    api.dashboards.get(
      req.params.id,
      (err, recipes) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipes);
      });
  });

  app.post('/api/users/:id/dashboard', function (req, res) {
    api.dashboards.getWithGoal(
      req.params.id,
      req.body,
      (err, recipes) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipes);
      });
  });

  // curl -X GET  http://localhost:3002/api/users/1/dashboard/app -H "Content-Type: application/json"

  app.get('/api/users/:id/dashboard/:keyword', function (req, res) {
    api.dashboards.search(
      req.params.id,
      req.params.keyword,
      (err, recipes) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipes);
      });
  });
};

