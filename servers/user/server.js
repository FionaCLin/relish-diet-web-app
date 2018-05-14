var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cons = require('consolidate'),
  dust = require('dustjs-helpers'),
  pg = require('pg');



module.exports = (config, opts) => {
  config = config || {};

  opts = opts || {
    nickname: 'user'
  };

  var routes = require('../../routes/index');

  var api = require('../../api')(config);
  var lib = api.lib;

  server = express();
  // Assign Dust Engine To .dust Files
  server.engine('dust', cons.dust);

  // Set .dust as default extension
  server.set('view engine', 'dust'); server.set('views', __dirname + '/views');

  // set public folder
  // uncomment after placing your favicon in /public
  //server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  server.use(express.static(path.join(__dirname, 'public')))

  server.use('/', routes);

  // Body parser middleware
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));

  //route for now
  server.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
  });


  var api = require('../../api')(config);
  var lib = api.lib;

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
        server.stop({
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
