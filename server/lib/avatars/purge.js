'use strict';

const async = require('async');

module.exports = (opts) => {

  let lib = opts.lib;

  lib.avatars.purge = (done) => {

    let avatars;

    let index = (next) => {
      lib.avatars.index(
        (err, res) => {
          avatars = res;
          next(err);
        });
    };

    let delOne = (avatar, next) => {
      lib.avatars.del(avatar.id, next);
    };

    let purge = (next) => {
      if (avatars.length > 0) {
        async.each(avatars, delOne, next);
      } else {
        next();
      }
    };

    async.series([
      index,
      purge
    ], (err) => {
      done(err);
    });

  };

};
