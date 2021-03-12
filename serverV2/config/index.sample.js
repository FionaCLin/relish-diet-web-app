"use strict";

const Path = require("path");

module.exports = function(env) {
  let nickname = "";
  let mode = "";

  if (!env) {
    env = "";
  }

  switch (env) {
    case "test":
      mode = "test";
      break;
    default:
      mode = "dev";
  }

  let server = {
    url: "",
    host: "0.0.0.0",
    port: 3002
  };


  // postgres
  let db = {
    host: "127.0.0.1",
    port: 5432,
    user: nickname,
    password: nickname,
    database: "fresh_fridge_" + mode,
    max: 5,
    idleTimeoutMillis: 300000,
    connectionTimeoutMillis: 200000
  };

  server.port = env == "production" ? 3001 : 3002;

  return {
    env: env,
    nickname: nickname,
    db: db,
    server: server
  };
};
