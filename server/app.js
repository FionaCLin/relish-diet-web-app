const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const async = require("async");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

module.exports = (config, opts) => {
  let app = express();
  config = config || {};

  opts = opts || {
    nickname: "user"
  };

  const api = require("./api")(config);

  const indexRouter = require("./routes/index")(api);
  const usersRouter = require("./routes/users")(api);

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
  app.use(cors());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

  app.use("/", indexRouter);
  app.use("/api/users", usersRouter);

  // // Body parser middleware
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json());

  // let routes = require("../../routes/index")(config, app);
  // server.use('/', routes);

  // server lifecycle manmagement
  let start = done => {
    // Server
    app = app.listen(config.server.port, function() {
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
