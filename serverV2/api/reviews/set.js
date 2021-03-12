'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  const lib = opts.lib;
  const api = opts.api;

  api.reviews.set = (review_id, attrs, done) => {
    let user, review;
    let validate = (next) => {
      attrs = _.defaults(attrs, {
        memberno: null,
        content: '',
        likes: null,
        recipe_id: null
      });

      if (!attrs.memberno || !_.isNumber(attrs.memberno)) {
        return done(new Error('invalid memberno'));
      }
      if (!attrs.likes || !_.isNumber(attrs.likes)) {
        return done(new Error('invalid likes'));
      }
      if (!attrs.content
        || !_.isString(attrs.content)
        || attrs.content.length < 4) {
        return done(new Error('invalid content'));
      }
      next();
    };

    let getUser = (next) => {
      lib.users.get(
        attrs.memberno,
        (err, res) => {
          if (err) {
            next(err);
          }
          user = res;
          next();
        });
    };

    let getReview = (next) => {
      lib.reviews.get(
        review_id,
        (err, res) => {
          if (err || !res) {
            return done(new Error('review not found'));
          }
          review = res;
          next();
        });
    };

    let setReview = (next) => {
      lib.reviews.set(
        review.id,
        attrs,
        (err, res) => {
          if (err) {
            next(err);
          }
          review = res;
          next();
        });
    };

    async.series([
      validate,
      getUser,
      getReview,
      setReview
    ], (err) => {
      done(err, review);
    });
  };
};
