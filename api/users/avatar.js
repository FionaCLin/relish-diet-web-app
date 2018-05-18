'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {

  var lib = opts.lib;
  var api = opts.api;

  api.users.setAvatar = (user_id, attrs, done) => {

    var requesting_user, target_user, avatar;

    var getRequestingUser = (next) => {
      lib.users.get(
        requesting_user_id, (err, res) => {
          if (err) {
            return next(err);
          }
          if (!res) {
            return next(new Error('not found'));
          }
          
          // user can change own avatar
          if (res.id === target_user_id) {
            return next();
          }
          return next(new Error('action not premitted'));
        });
    };

    var setAvatar = (next) => {

      avatar = {
        object_type: 'users',
        object_id: target_user.id,
        mime: attrs.buffer.type,
        buffer: attrs.buffer
      };

      lib.avatars.add(
        avatar, (err, res) => {
          if (err) {
            return next(err);
          }
          avatar = res;
          next();
        });
    };

    var saveAvatar = (next) => {
      lib.users.set(
        target_user.id, {
          avatar_id: avatar.id
        }, next);
    };

    async.series([
      getRequestingUser,
      setAvatar,
      saveAvatar
    ], (err) => {
      done(err, {
        avatar_id: avatar.id
      });
    });

  };

};
