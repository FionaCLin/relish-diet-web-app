'use strict';

module.exports = (app, api) => {
  app.get('/api/users/:id/dashboard', function (req, res) {
    console.log(req.params.id);
    api.recipes.getDashboard(
      req.params.id,
      (err, recipes) => {
        console.log(recipes);
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipes);
      });
  });
};

