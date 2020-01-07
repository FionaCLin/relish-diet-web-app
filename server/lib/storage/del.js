'use strict';

const fs = require('fs');

module.exports = (opts) => {
  let lib = opts.lib;

  function delS3 (path, next) {
    let AWS = require('aws-sdk');

    AWS.config.region = opts.storage.s3.region;
    AWS.config.update({
      accessKeyId: opts.storage.s3.key,
      secretAccessKey: opts.storage.s3.secret
    });

    let s3 = new AWS.S3();

    let params = {
      Bucket: opts.storage.s3.bucket,
      Key: (opts.storage.s3.prefix ? opts.storage.s3.prefix + '/' : '') + path
    };

    s3.deleteObject(
      params,
      (err, res) => {
        if (err) {
          console.log('lib.storage.del', err);
          return next(err);
        }
        // buffer
        next(err, res.Body);
      });
  }

  function delFs (path, next) {
    let f = opts.storage.fs.root + '/' + path;
    fs.unlink(f, (err) => {
      // delete non-existant file is OK
      if (err && err.message.substr(0, 6) !== 'ENOENT') {
        return next(err);
      }
      next();
    });
  }

  let del = opts.storage.method === 's3' ? delS3 : delFs;

  lib.storage.del = (path, done) => {
    del(path, done);
  };
};
