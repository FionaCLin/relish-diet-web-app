var express = require("express");
var router = express.Router();

module.exports = api => {
  router.use((req, res, next) => {
    let token = req.headers.authorization.substr(7);
    api.users.get(token, (err, res) => {
      if (err) {
        return next("route");
      }
      req.user = res;
      next();
    });
  });
  /* GET users listing. */
  router.get("/", function(req, res, next) {
    res.send("respond with a smile");
  });

  // curl -X GET  http://localhost:3002/api/users/1
  router.get("/:id", function(req, res) {
    api.users.get(req.params.id, (err, user) => {
      if (err) {
        res.status(403).send(err.message);
      }
      res.send(user);
    });
  });

  // get the payload with req.body
  router.put("/:id/password", function(req, res) {
    api.users.setPassword(req.params.id, req.body, (err, user) => {
      if (err) {
        res.status(400).send(err.message);
      }
      res.status(200).send();
    });
  });

  /*
     curl -X PUT http://localhost:3002/1 -H "Content-Type: application/json" -d "{\"email\":\"fiona@freshfridge.com\"}"
   */
  router.put("/:id", function(req, res) {
    api.users.set(req.user.id, req.body, (err, user) => {
      if (err) {
        res.status(400).send(err.message);
      }
      res.status(200).send();
    });
  });

  return router;
};
