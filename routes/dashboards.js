'use strict';

module.exports = (app, api) => {
  app.get('/api/users/:id/dashboard', function (req, res) {
    api.recipes.getByUser(
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

