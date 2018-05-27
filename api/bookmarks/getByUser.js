'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  /**
    Returns list of recipes bookmarked by a user.
  **/

  api.bookmarks.getByUser = (user_id, done) => {
    let bookmarks;

    var get = (next) => {
      lib.bookmarks.getByUser(
        user_id,
        (err, res) => {
          if (err) {
            return done(new Error('bookmarks do not exist'));
          }
          bookmarks = res;
          bookmarks.forEach(element => {
            element.recipe = {
              name: 'Spicy Southwestern Vegetarian Burger',
              method: '1.In a large skillet add 1 tablespoon oil, turn to medium-low heat and saut� onions until tender, about 4 minutes.Add garlic and saute one additional minute.Add kidney beans, green chili peppers and corn, continue to saut� until beans soften up, about 3 minutes.Add oregano, chili powder, cumin and cayenne pepper, stir to combine.\n 2.Combine in a large mixing bowl bean mixture, cheese and bread crumbs.\n 3.Mash all ingredients with a potato masher or fork until beans are well mashed.Allow to cool for 10 minutes.\n 4.Make 5 burger shaped patties.Note: Patties can be cooked right away or covered and refrigerated for up to 24 hours.\n 5.Add remaining tablespoon oil to a non - stick large skillet, turn to medium heat and cook until patties are browned on both sides and heated through, approximately 12 minutes total.\n 6.Serve patties on your favorite bun or roll.Try your favorite condiments',
              duration: 40,
              fat: 0,
              cabs: 0,
              carolies: 0,
              protien: 0
            };
          });
          next();
        });
    };

    async.series([
      get
    ], (err) => {
      done(err, bookmarks);
    });
  };
};
