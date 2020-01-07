'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  const lib = opts.lib;
  const api = opts.api;

  api.reviews.del = (user_id, review_id, done) => {
    let user, review;

    let getUser = (next) => {
      lib.users.get(
        user_id,
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
          if (res.memberno !== user.id) {
            return done(new Error('action not premitted, invalid commentor'));
          }
          review = res;
          next();
        });
    };

    let delReview = (next) => {
      lib.reviews.del(
        review.id,
        (err, res) => {
          if (err) {
            return done(new Error('action not premitted'));
          }
          next();
        });
    };

    async.series([
      getUser,
      getReview,
      delReview
    ], (err) => {
      done(err, review);
    });
  };
};
