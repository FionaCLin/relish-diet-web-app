'use strict';

module.exports = (app, api) => {

  // user
  app.get('/api/users/:id', function (req, res) {
    api.users.get(
      req.params.id,
      (err, user) => {
        res.send(user);
      });
  });

  /*
      curl -vX POST  http://localhost:3002/api/signup -H "Content-Type: application/json"  -d "{\"email\":\"kkk@freshfridge.com\",\"username\":\"hahai\",\"password\":\"123\",\"nameGiven\":\"fiona\", \"nameFamily\":\"lin\", \"birthday\":\"01-01-2000\",\"gender\":\"F\",\"goal\":\"lose weight\"}"
      curl -vX POST  http://localhost:3002/api/signup -H "Content-Type: application/json"  -d "{\"email\":\"test@freshfridge.com\",\"username\":\"toby\",\"password\":\"123\",\"nameGiven\":\"david\", \"nameFamily\":\"phan\", \"birthday\":\"01-01-2000\",\"gender\":\"M\",\"goal\":\"lose weight\"}"
  */


  // get the payload with req.body
  app.post('/api/signup', function (req, res) {
    api.users.add(
      req.body,
      (err, user) => {
        console.log(err);
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

  /*
     curl -vX PUT http://localhost:3002/api/users/1 -H "Content-Type: application/json" -d "{\"email\":\"fiona@freshfridge.com\"}"
   */
  app.put('/api/users/:id', function (req, res) {
    api.users.set(
      req.params.id,
      req.body,
      (err, user) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

/*
 curl - vX POST  http://localhost:3002/api/users/login -H "Content-Type: application/json"  -d "{\"email\":\"kkk@freshfridge.com\",\"password\":\"123\"}"
 */

  app.post('/api/users/login', function (req, res) {
    api.users.auth(
      req.body.email,
      req.body.password,
      (err, user) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).send();
      });
  });

};
