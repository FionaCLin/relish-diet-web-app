const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const async = require('async');
const pg = require('pg');

module.exports = (config, opts) => {
  config = config || {};

  opts = opts || {
    nickname: 'user'
  };

  let api = require('../../api')(config);
  let lib = api.lib;

  let server = express();

  let authscheme = require('./auth')(api);
  passport.use(new Strategy(authscheme.strategy));

  server.get('/*',
    passport.authenticate('bearer', { session: false }),
    function (req, res) {
      res.json({ username: req.user.username, email: req.user.emails[0].value });
    });
  // Set .dust as default extension
  server.set('view engine', 'dust'); server.set('views', __dirname + '/views');

  // set public folder
  // uncomment after placing your favicon in /public
  // server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  server.use(express.static(path.join(__dirname, 'public')));

  // Body parser middleware
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  let routes = require('../../routes/index')(config, server);
  // server.use('/', routes);

  // server lifecycle manmagement
  let start = (done) => {
    // Server
    server = server.listen(config.servers.user.port, function () {
      console.log('Server started on port', config.servers.user.port);
      done();
    });
  };

  let stop = (done) => {
    async.series([
      (next) => {
        server.close({
          timeout: 1000
        }, (err, res) => {
          next(err);
        });
      },
      api.quit
    ], done);
  };

  return {
    api: api,
    start: start,
    stop: stop
  };
};
