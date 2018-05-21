'use strict';

const _ = require('lodash');
const async = require('async');

module.exports = (opts) => {
  const lib = opts.lib;
  const api = opts.api;

  api.reviews.get = (review_id, done) => {
    let user, review;

    if (!review_id || !_.isNumber(review_id)) {
      return done(new Error('invalid review_id'));
    }


    // Maybe add more validation stuff
    lib.reviews.get(review_id, (err, res) => {
      done(err, res);
    });

  };
};
