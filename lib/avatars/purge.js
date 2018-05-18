'use strict';

const async = require('async');

module.exports = (opts) => {

  const lib = opts.lib;

  lib.avatars.purge = (done) => {

    var avatars;

    var index = (next) => {
      lib.avatars.index(
        (err, res) => {
          avatars = res;
          next(err);
        });
    };

    var delOne = (avatar, next) => {
      lib.avatars.del(avatar.id, next);
    };

    var purge = (next) => {
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
