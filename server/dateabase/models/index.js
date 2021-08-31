const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const environment = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[environment];
const database = {};

let sequelize;
sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

for (const file of fs.readdirSync(__dirname).filter((file) => {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
})) {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  database[model.name] = model;
}

for (const modelName of Object.keys(database)) {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
}

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
