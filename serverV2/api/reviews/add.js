'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  const lib = opts.lib;
  const api = opts.api;

  api.reviews.add = (recipe_id, attrs, done) => {
    let user, review;

    let validate = (next) => {
      attrs = _.defaults(attrs, {
        recipe_id: null,
        memberno: null,
        content: '',
        likes: null // maybe this one for set
      });
      if (!attrs.recipe_id || !_.isNumber(attrs.recipe_id)) {
        return done(new Error('invalid recipe_id'));
      }
      if (!attrs.memberno || !_.isNumber(attrs.memberno)) {
        return done(new Error('invalid memberno'));
      }
      if (!attrs.content || !_.isString(attrs.content)) {
        return done(new Error('invalid content'));
      }
      next();
    };

    let getUser = (next) => {
      lib.users.get(
        attrs.memberno,
        (err, res) => {
          if (err || !res) {
            return done(err);
          }
          user = res;
          next();
        });
    };

    let addReview = (next) => {
      lib.reviews.add(
        user.id,
        attrs,
        (err, res) => {
          if (err || !res) {
            return done(err);
          }
          review = res;
          next();
        });
    };

    async.series([
      validate,
      getUser,
      addReview
    ], (err) => {
      done(err, review);
    });
  };
};
