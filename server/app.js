
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const graphqlHTTP = require("express-graphql");
const app = express();

module.exports = (config, opts) => {
  config = config || {};

  opts = opts || {
    nickname: "user"
  };

  let api = require("./api")(config);

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/graphql", graphqlHTTP({}));

  app.use("/", indexRouter);
  app.use("/users", usersRouter);

  // // Body parser middleware
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json());

  // let routes = require("../../routes/index")(config, app);
  // server.use('/', routes);

  // server lifecycle manmagement
  let start = done => {
    // Server
    app.listen(config.server.port, function() {
      console.log("Server started on port", config.server.port);
      done();
    });
  };

  let stop = done => {
    async.series(
      [
        next => {
          app.close(
            {
              timeout: 1000
            },
            (err, res) => {
              next(err);
            }
          );
        },
        api.quit
      ],
      done
    );
  };

  return {
    api: api,
    start: start,
    stop: stop
  };
};
