var express = require("express");
var router = express.Router();

module.exports = api => {
  /* GET home page. */
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
  });

  /*
      curl -X POST  http://localhost:3002/api/signup -H "Content-Type: application/json"  -d "{\"email\":\"synexenel1416@yopmail.com\",\"username\":\"hahai\",\"password\":\"123\",\"nameGiven\":\"fiona\", \"nameFamily\":\"lin\", \"birthday\":\"01-01-2000\",\"gender\":\"F\",\"goal\":\"lose weight\"}"
      curl -X POST  http://localhost:3002/api/signup -H "Content-Type: application/json"  -d "{\"email\":\"test@freshfridge.com\",\"username\":\"toby\",\"password\":\"123\",\"nameGiven\":\"david\", \"nameFamily\":\"phan\", \"birthday\":\"01-01-2000\",\"gender\":\"M\",\"goal\":\"lose weight\"}"
  */

  // get the payload with req.body
  router.post("/signup", function(req, res) {
    api.users.add(req.body, (err, user) => {
      if (err) {
        res.status(400).send(err.message);
      }
      res.status(200).send();
    });
  });

  /*
   curl -X POST  http://localhost:3002/login -H "Content-Type: application/json"  -d "{\"email\":\"synexenel1416@yopmail.com\",\"password\":\"123\"}"
   */

  router.post("/login", function(req, res) {
    api.users.auth(req.body.email, req.body.password, (err, user) => {
      if (err) {
        res.status(400).send(err.message);
      }
      res.status(200).send(user);
    });
  });

  return router;
};
