'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  //opposite of add.
  //remove the bookmarked recipe from the user's bookmarked list.
  //should it be done according to userID+recipeID vs bookmarkedID?

  api.bookmarks.del = (bookmarked_id, done) => {

    // whitelist attrs
    // var keys = [
    //   'bookmarked_id'
    // ];

    // attrs = _.pick(attrs, keys);

    let checkValid = (next) => {
      lib.bookmarks.get(
        bookmarked_id,
        (err, res) => {
          if (err) {
            return done(new Error('bookmark does not exist'));
          }
        }
      )
    }

    var del = (next) => {
      lib.bookmarks.del(
        bookmarked_id,
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
    ], (err, res) => {
      done(err, res);
    });
  };
};
