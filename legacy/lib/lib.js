'use strict';

const path = require('path');
const async = require('async');

module.exports = (config) => {
  // low level data services, required once and dependency injected in
  // to libs that need them

  // the lib abstracts use of data services to implement our actual
  // functionality. these may call in their own data sources, but all
  // configuration for those must come from config. This file should
  // be the only point that config is used.

  // let db = require('./db.js')(config);
  let db = require('./db.js')(config);


  let lib = {
    env: config.env,
    nickname: config.nickname,
    servers: config.servers,
    settings: config.settings,
    db: db,
  };

  // our libs, built on top of the different backing systems

  lib.users = require('./users')({
    settings: config.settings,
    db: db,
    lib: lib
  });

  lib.recipes = require('./recipes')({
    db: db,
    lib: lib
  });

  lib.ingredients = require('./ingredients')({
    db: db,
    lib: lib
  });

  lib.reviews = require('./reviews')({
    db: db,
    lib: lib
  });

  lib.bookmarks = require('./bookmarks')({
    db: db,
    lib: lib
  });

  lib.mealplans = require('./mealplans')({
    db: db,
    lib: lib
  });

  lib.timeslots = require('./timeslots')({
    db: db,
    lib: lib
  });

  let resetDb = (done) => {
    let fs = require('fs');
    let schema = fs.readFileSync(
      __dirname + '/../schema.sql',
      'ascii'
    );
    db.reset(schema, done);
  };


  // purge all data in the system to pristine state (use for testing)
  lib.reset = (quick, done) => {
    // if quick is true then s3 will not be purged

    if (typeof quick === 'function') {
      done = quick;
      quick = false;
    }

    // if not quick, should purge s3 here
    async.series([
      resetDb,
      //resetProcs
    ], () => {
      if (done) {
        done();
      }
    });
  };

  /**
   * Quit any open clients. Use this for clean shutdown of the lib.
   *
   * @method quit
   * @param {function} done callback
   */
  lib.quit = (done) => {
    async.series([
      db.quit,
    ], () => {
      if (done) {
        done();
      }
    });
  };

  // export the lib methods
  return lib;
};
