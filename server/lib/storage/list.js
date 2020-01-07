'use strict';

const fs = require('fs');
const _ = require('lodash');

module.exports = (opts) => {
  let lib = opts.lib;

  function listS3 (path, next) {
    let AWS = require('aws-sdk');

    AWS.config.region = opts.storage.s3.region;
    AWS.config.update({
      accessKeyId: opts.storage.s3.key,
      secretAccessKey: opts.storage.s3.secret
    });

    let s3 = new AWS.S3();

    let params = {
      Bucket: opts.storage.s3.bucket,
      Prefix: (opts.storage.s3.prefix ? opts.storage.s3.prefix + '/' : '') + path
    };

    s3.listObjects(
      params,
      (err, res) => {
        if (err) {
          console.log('lib.storage.list', err);
          return next(err);
        }
        next(err, _.reduce(res.Contents, (acc, x) => {
          let s = x.Key.substr(path.length + 1);
          if (s) {
            acc.push(s);
          }
          return acc;
        }, []));
      });
  }

  function listFs (path, next) {
    let dir = opts.storage.fs.root + '/' + path;
    let files = [];
    fs.readdir(dir, (err, res) => {
      if (err) {
        return next(err);
      }
      res.forEach((file) => {
        if (['.'].indexOf(file.substr(0, 1)) > -1) {
          return;
        }
        files.push(file);
      });
      next(null, files);
    });
  }

  let list = opts.storage.method === 's3' ? listS3 : listFs;

  lib.storage.list = (path, done) => {
    list(path, done);
  };
};
