const _ = require('lodash');
const async = require('async');
const pg = require('pg');

module.exports = (config) => {
  let connString = 'postgres://' + config.db.user + ': ' + config.db.password + '@' + config.db.host + ':' + config.db.port + '/' + config.db.database;

  const pool = new pg.Pool({
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: 5432,
    // connectionString: connString,
    idleTimeoutMillis: config.db.idleTimeoutMillis,
    connectionTimeoutMillis: config.db.connectionTimeoutMillis,
    max: config.db.max
  });

  let conn = (done) => {
    return pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }
        console.log(result.rows);
        done();
      })
    })
  };

  let quit = (done) => {
    pool.end();
    return done();
  };

  let query = (sql, args, next) => {
    if (typeof args === 'function') {
      next = args;
      args = null;
    }
    pool.query(
      sql,
      args,
      (err, res) => {
        if (err) {
          return next(err);
        }
        next(null, res.rows);
      });
  };

  let queryOne = (sql, args, next) => {
    if (typeof args === 'function') {
      next = args;
      args = null;
    }

    query(
      sql,
      args,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        let row = false;
        // if more than one row is found, result is indeterminate
        if (rows && rows.length > 0) {
          row = rows[0];
        }
        next(null, row);
      });
  };

  let resetSchema = (schema, done) => {
    schema = schema.trim();
    schema = schema.split(';');
    schema = _.reduce(
      schema,
      (memo, sql) => {
        sql = sql.trim();
        if (sql !== '') {
          memo.push(sql);
        }
        return memo;
      }, []);

    async.eachSeries(
      schema,
      (sql, next) => {
        query(sql, (err, res) => {
          if (err) {
            console.log(sql);
            console.log(err);
            process.exit(0);
          }
          next();
        });
      },
      (err) => {
        if (err) {
          console.log(err);
          process.exit(0);
        }
        done();
      });
  };

  return {
    query: query,
    queryOne: queryOne,
    reset: resetSchema,
    quit: quit,
    conn: conn
  };
};
