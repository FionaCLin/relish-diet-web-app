const express = require('express');
// let router = express.Router();

module.exports = (config, opts) => {
  config = config || {};

  opts = opts || {
    nickname: 'user'
  };

  let app = opts;
  let api = require('../api')(config);
  let lib = api.lib;

  require('./users')(app, api);
  require('./recipes')(app, api);
  require('./dashboards')(app, api);
  require('./reviews')(app, api);
  require('./mealplans')(app, api);
  require('./timeslots')(app, api);
  require('./bookmarks')(app, api);
};
