'use strict';

module.exports = (app, api) => {

  // recipe
  //recipe details
  app.get('/api/dashboard', function (req, res) {
    // fetch recipes based on goal
    });

  /*
      curl - vX POST  http://localhost:3002/api/dashboard -H "Content-Type: application/json"  -d "{"\keyword\":\"eggs\", \"calories\":\"\",\"protein\":\"\" ,\"carbs\":\"\",\"fat\":\"10\" }"
      // 'calories',
      // 'protein',
      // 'carbs',
      // 'fat',
  */

  // get the payload with req.body
  app.post('/api/dashboard/search', function (req, res) {
    api.recipes.add(
      req.body,
      (err, recipe) => {
        console.log(err);
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

};
