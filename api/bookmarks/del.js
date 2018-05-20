'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  //opposite of add.
  //remove the bookmarked recipe from the user's bookmarked list.
  //should it be done according to userID+recipeID vs bookmarkedID?

  api.bookmarks.del = (attrs, done) => {

    // whitelist attrs
    var keys = [
      'bookmarked_id'
    ];

    attrs = _.pick(attrs, keys);

    //does the recipe id already exist?
    //should i add a check here? fk it

    var del = (next) => {
      lib.bookmarks.del(
        attrs.bookmarked_id,
        (err, res) => {
          if (err) {
            next(err);
          }
          next();
        }
      )
    }

    async.series([
      del
    ], (err) => {
      done(err, user);
    });
  };
};
