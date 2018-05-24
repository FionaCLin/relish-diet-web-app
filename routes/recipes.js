'use strict';

module.exports = (app, api) => {
  // recipe
  // recipe details
  app.get('/api/recipes/:id', function (req, res) {
    console.log(req.params.id);
    api.recipes.get(
      req.params.id,
      (err, recipe) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipe);
      });
  });

  /*
      curl - vX POST  http://localhost:3002/api/login -H "Content-Type: application/json"  -d "{\"email\":\"kkk@freshfridge.com\",\"recipename\":\"hahai\",\"password\":\"123\",\"nameGiven\":\"fiona\", \"nameFamily\":\"lin\", \"birthday\":\"01-01-2000\",\"gender\":\"F\",\"goal\":\"lose weight\"}"
      curl -vX POST  http://localhost:3002/api/recipes/create -H "Content-Type: application/json"  -d "{\"name\":\"Chicken and Broccoli\", \"method\":\"1. do this, 2. do that\", \"duration\":\"40\", \"rate\":\"0\", \"creatorID\":\"1\"}"
      'method',
      'duration',
      // 'calories',
      // 'protein',
      // 'carbs',
      // 'fat',
      'rate',
      'creatorID',

  */
  // "{\"name\":\"Chicken and Broccoli\", \"method\":\"1. do this, 2. do that\", \"duration\":\"40\", \"rate\":\"0\", \"creatorID\":\"1\"}"

  /*
  curl -vX POST http://localhost:3002/api/recipes/create -H "Content-type: application/json" -d '{"memberno":1,"name":"Spicy Southwestern Vegetarian Burger","method":"1.In a large skillet add 1 tablespoon oil, turn to medium-low heat and saut� onions until tender, about 4 minutes. Add garlic and saute one additional minute. Add kidney beans, green chili peppers and corn, continue to saut until beans soften up, about 3 minutes. Add oregano, chili powder, cumin and cayenne pepper, stir to combine 2.Combine in a large mixing bowl bean mixture, cheese and bread crumbs 3.Mash all ingredients with a potato masher or fork until beans are well mashed. Allow to cool for 10 minutes  4.Make 5 burger shaped patties. Note: Patties can be cooked right away or covered and refrigerated for up to 24 hours 5.Add remaining tablespoon oil to a non-stick large skillet, turn to medium heat and cook until patties are browned on both sides and heated through, approximately 12 minutes total 6.Serve patties on your favorite bun or roll. Try your favorite condiments","duration":40,"calories":1583,"protein":79.32,"cabs":123.485,"fat":92.755,"rate":0,"images":null,"at":"1527144357108","amount":null,"ingredients":[{"ndbno":1,"name":"olive oil","uom":"tablespoon","calories":48,"protein":0,"cabs":0,"fat":5.6,"amount":"2"},{"ndbno":2,"name":"diced red onions","uom":"cup","calories":7,"protein":0.15,"cabs":1.62,"fat":0.01,"amount":"0.5"},{"ndbno":3,"name":"garlic","uom":"clove","calories":4,"protein":0,"cabs":1,"fat":0,"amount":"1"},{"ndbno":4,"name":"kidney beans drained","uom":"can","calories":350,"protein":1.5,"cabs":65,"fat":0.9,"amount":"0.25"},{"ndbno":5,"name":"diced green chili peppers","uom":"can","calories":8,"protein":0.28,"cabs":1.7,"fat":0.1,"amount":"0.25"},{"ndbno":6,"name":"fresh corn","uom":"g","calories":17,"protein":0.64,"cabs":3.8,"fat":0.24,"amount":"20"},{"ndbno":7,"name":"cheddar cheese","uom":"g","calories":60,"protein":4,"cabs":0.2,"fat":5,"amount":"15"},{"ndbno":8,"name":"whole grain bun","uom":null,"calories":150,"protein":6,"cabs":26,"fat":1.5,"amount":null}]}'

  */

  // get the payload with req.body
  app.post('/api/recipes/create', function (req, res) {
    req.body;
    console.log(req.body);
    api.recipes.add({
      name: req.body.name,
      creatorID: req.body.creator,
      ingredients: req.body.ingredients,
      method: req.body.method,
      calories: req.body.calories,
      carbs: req.body.carbs,
      protein: req.body.protein,
      fat: req.body.fat,
      duration: 40
    },
      (err, recipe) => {
        if (err) {
          console.log(err.message, req.body.creator);
          return res.status(400).send(err.message);
        }
        res.status(200).send(recipe);
      });
  });

  /*   curl - vX PUT http://localhost:3002/api/recipes/1 -H "Content-Type: application/json" -d "{\"email\":\"fiona@freshfridge.com\"}"
   */

  app.put('/api/recipes/:id', function (req, res) {
    api.recipes.set(
      req.params.id,
      req.body,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

  // can we delete a recipes??
  app.delete('/api/recipes/:id', function (req, res) {
    api.recipes.del(
      req.params.id,
      (err, recipe) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });
};
