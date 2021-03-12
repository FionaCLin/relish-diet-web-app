'use strict';

const fs = require('node-fs-extra');

module.exports = (opts) => {
  let lib = opts.lib;

  function copyS3 (source, target, next) {
    let AWS = require('aws-sdk');

    AWS.config.region = opts.storage.s3.region;
    AWS.config.update({
      accessKeyId: opts.storage.s3.key,
      secretAccessKey: opts.storage.s3.secret
    });

    let s3 = new AWS.S3();

    let params = {
      Bucket: opts.storage.s3.bucket,
      CopySource: opts.storage.s3.bucket + '/' + (opts.storage.s3.prefix ? opts.storage.s3.prefix + '/' : '') + source,
      Key: (opts.storage.s3.prefix ? opts.storage.s3.prefix + '/' : '') + target,
      MetadataDirective: 'COPY'
    };

    s3.copyObject(
      params,
      (err, res) => {
        if (err) {
          console.log('lib.storage.copy', err);
        }
        next(err);
      });
  }

  function copyFs (source, target, next) {
    let parents = target.split('/');
    parents.pop();

    if (parents.length > 0) {
      try {
        fs.mkdirp.sync(opts.storage.fs.root + '/' + parents.join('/'));
      } catch (e) {
        console.log('lib.storage.copy (fs)', e);
      }
    }

    let src = opts.storage.fs.root + '/' + source;
    let dst = opts.storage.fs.root + '/' + target;

    fs.copy(src, dst, (err, data) => {
      if (err) {
        console.log('lib.storage.copy', err);
      }
      next(err);
    });
  }

  let copy = opts.storage.method === 's3' ? copyS3 : copyFs;

  lib.storage.copy = (source, target, done) => {
    copy(source, target, done);
  };
};
