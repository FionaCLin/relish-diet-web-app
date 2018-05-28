'use strict';

module.exports = (app, api) => {
  // curl -X GET  http://localhost:3002/api/users/2/bookmarks/7
  app.get('/api/users/:userid/bookmarks/:id', function (req, res) {
    api.bookmarks.get(
      req.params.userid,
      req.params.id,
      (err, bookmarks) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(bookmarks);
      });
  });

  // curl -X GET  http://localhost:3002/api/users/2/bookmarks
  app.get('/api/users/:id/bookmarks', function (req, res) {
    api.bookmarks.getByUser(
      req.params.id,
      (err, bookmarks) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(bookmarks);
      });
  });

  /*
      curl -X POST  http://localhost:3002/api/users/2/bookmarks/1 -H "Content-Type: application/json"
  */

  app.post('/api/users/:userid/bookmarks/:recipeid', function (req, res) {
    api.bookmarks.add(
      req.params.userid,
      req.params.recipeid,
      (err, bookmark) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.status(200).send(bookmark);
      });
  });

  /*   curl -vX DELETE  http://localhost:3002/api/users/2/bookmarks/:id  */
  app.delete('/api/users/:userid/bookmarks/:id', function (req, res) {
    api.bookmarks.del(
      req.params.userid,
      req.params.id,
      (err, bookmark) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send({ result: 'ok' });
      });
  });
};
