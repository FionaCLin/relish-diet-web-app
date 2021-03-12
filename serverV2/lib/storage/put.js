'use strict';

const fs = require('node-fs-extra');

module.exports = (opts) => {
  let lib = opts.lib;

  function putS3 (path, buffer, next) {
    let AWS = require('aws-sdk');

    AWS.config.region = opts.storage.s3.region;
    AWS.config.update({
      accessKeyId: opts.storage.s3.key,
      secretAccessKey: opts.storage.s3.secret
    });

    let s3 = new AWS.S3();

    let params = {
      Bucket: opts.storage.s3.bucket,
      Key: (opts.storage.s3.prefix ? opts.storage.s3.prefix + '/' : '') + path,
      Body: buffer,
      ContentLength: buffer.length,
      ContentType: 'application/octet-stream'
    };

    s3.putObject(
      params,
      (err, res) => {
        if (err) {
          console.log('lib.storage.put', err);
        }
        next(err);
      });
  }

  function putFs (path, buffer, next) {
    if (!Buffer.isBuffer(buffer)) {
      console.log('lib.storage.put (fs) not buffer');
      return next(new Error('not a buffer'));
    }

    let parents = path.split('/');
    parents.pop();

    if (parents.length > 0) {
      try {
        fs.mkdirp.sync(opts.storage.fs.root + '/' + parents.join('/'));
      } catch (e) {
        console.log('lib.storag.put (fs)', e);
      }
    }

    let f = opts.storage.fs.root + '/' + path;

    fs.writeFile(f, buffer, (err, data) => {
      if (err) {
        console.log('lib.storage.put', err);
      }
      next(err);
    });
  }

  let put = opts.storage.method === 's3' ? putS3 : putFs;

  lib.storage.put = (path, buffer, done) => {
    put(path, buffer, done);
  };
};
