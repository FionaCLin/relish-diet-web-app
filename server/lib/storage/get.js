'use strict';

const fs = require('fs');

module.exports = (opts) => {
  let lib = opts.lib;

  function getS3 (path, next) {
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

    s3.getObject(
      params,
      (err, res) => {
        if (err) {
          console.log('lib.storage.get', err);
          return next(err);
        }
        // buffer
        next(err, res.Body);
      });
  }

  function getFs (path, next) {
    let f = opts.storage.fs.root + '/' + path;
    fs.readFile(f, (err, data) => {
      if (err) {
        // console.log('lib.storage.get', err);
        return next(err);
      }
      next(err, data);
    });
  }

  let get = opts.storage.method === 's3' ? getS3 : getFs;

  lib.storage.get = (path, done) => {
    get(path, done);
  };
};
