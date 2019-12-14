'use strict';

var sprintf = require('sprintf').sprintf;
var async = require('async');
var Path = require('path');
var config = require('./config')(process.env.NODE_ENV);

var args = [];

if (process.argv.length > 2) {
  for (let i = 2; i < process.argv.length; i++) {
    args.push(process.argv[i]);
  }
}

const services = [{
  group: 'servers',
  title: 'user',
  meta: config.servers.user.host + ':' + config.servers.user.port,
  path: 'servers/user/server.js'
}];

async.each(
  services,
  (service, next) => {
    // if no args, start everything, else if service group or title in
    // args, start the service
    if (args.length > 0 && (args.indexOf(service.group) === -1 && args.indexOf(service.title) === -1)) {
      return next();
    }
    service.app = require(Path.join(__dirname, service.path))(service.config || config);
    service.app.start(() => {
      console.log(sprintf('start %-3s %-11s %-7s %-12s %-24s', config.nickname, config.env, service.group, service.title, service.meta || ''));
      next();
    });
  }, () => {
    console.log('started');
  });

process.on('SIGINT', () => {
  console.log('shutting down...');
  async.each(
    services,
    (service, next) => {
      if (!service.app) {
        return next();
      }
      service.app.stop(() => {
        console.log(sprintf('stop  %-3s %-11s %-7s %-12s %-24s', config.nickname, config.env, service.group, service.title, service.meta || ''));
        next();
      });
    }, () => {
      console.log('finished');
    });
});
