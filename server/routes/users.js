var express = require("express");
var router = express.Router();

module.exports = api => {
  /* GET users listing. */
  router.get("/", function(req, res, next) {
    res.send("respond with a smile");
  });

  // curl -X GET  http://localhost:3002/1
  router.get("/:id", function(req, res) {
    api.users.get(req.params.id, (err, user) => {
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
    api.users.set(req.params.id, req.body, (err, user) => {
      if (err) {
        res.status(400).send(err.message);
      }
      res.status(200).send();
    });
  });

  return router;
};
