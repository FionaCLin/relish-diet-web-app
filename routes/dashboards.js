'use strict';

module.exports = (app, api) => {
  app.get('/api/users/:id/dashboard', function (req, res) {
    api.recipes.getDashboard(
      req.params.id,
      (err, recipes) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipes);
      });
  });

  app.post('/api/users/:id/dashboard', function (req, res) {
    console.log(req.body);
    api.recipes.getDashboard(
      req.params.id,
      (err, recipes) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipes);
      });
  });
};

