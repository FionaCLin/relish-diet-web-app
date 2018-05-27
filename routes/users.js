'use strict';

module.exports = (app, api) => {
  // user
  // curl -X GET  http://localhost:3002/api/users/1
  app.get('/api/users/:id', function (req, res) {
    api.users.get(
      req.params.id,
      (err, user) => {
        res.send(user);
      });
  });

  /*
      curl -X POST  http://localhost:3002/api/signup -H "Content-Type: application/json"  -d "{\"email\":\"synexenel1416@yopmail.com\",\"username\":\"hahai\",\"password\":\"123\",\"nameGiven\":\"fiona\", \"nameFamily\":\"lin\", \"birthday\":\"01-01-2000\",\"gender\":\"F\",\"goal\":\"lose weight\"}"
      curl -X POST  http://localhost:3002/api/signup -H "Content-Type: application/json"  -d "{\"email\":\"test@freshfridge.com\",\"username\":\"toby\",\"password\":\"123\",\"nameGiven\":\"david\", \"nameFamily\":\"phan\", \"birthday\":\"01-01-2000\",\"gender\":\"M\",\"goal\":\"lose weight\"}"
  */

  // get the payload with req.body
  app.post('/api/signup', function (req, res) {
    api.users.add(
      req.body,
      (err, user) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });

  // get the payload with req.body
  app.put('/api/users/:id/password', function (req, res) {
    api.users.setPassword(
      req.params.id,
      req.body,
      (err, user) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });

  /*
     curl -X PUT http://localhost:3002/api/users/1 -H "Content-Type: application/json" -d "{\"email\":\"fiona@freshfridge.com\"}"
   */
  app.put('/api/users/:id', function (req, res) {
    api.users.set(
      req.params.id,
      req.body,
      (err, user) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send();
      });
  });

  /*
   curl -X POST  http://localhost:3002/login -H "Content-Type: application/json"  -d "{\"email\":\"synexenel1416@yopmail.com\",\"password\":\"123\"}"
   */

  app.post('/login', function (req, res) {
    api.users.auth(
      req.body.email,
      req.body.password,
      (err, user) => {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(200).send(user);
      });
  });
};

