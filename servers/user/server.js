let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cons = require('consolidate');
let dust = require('dustjs-helpers');
let async = require('async');
let pg = require('pg');

module.exports = (config, opts) => {
  config = config || {};

  opts = opts || {
    nickname: 'user'
  };

  
  let api = require('../../api')(config);
  let lib = api.lib;
  
  let server = express();
  // Assign Dust Engine To .dust Files
  server.engine('dust', cons.dust);
  
  // Set .dust as default extension
  server.set('view engine', 'dust'); server.set('views', __dirname + '/views');
  
  // set public folder
  // uncomment after placing your favicon in /public
  //server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  server.use(express.static(path.join(__dirname, 'public')));
  
  // Body parser middleware
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());
  
  let routes = require('../../routes/index')(config, server);
  // server.use('/', routes);

  //route for now
  server.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
  });

  // server lifecycle manmagement
  var start = (done) => {
    // Server
    server.listen(config.servers.user.port, function () {
      console.log('Server started on port', config.servers.user.port);
      done();
    });

  };

  var stop = (done) => {
    async.series([
      (next) => {
        server.end({
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