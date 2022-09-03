/* eslint-disable no-restricted-syntax, global-require, import/no-dynamic-require */

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);

const environment = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.json`)[environment];
const models = {};

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.models, config.username, config.password, config);

for (const file of fs.readdirSync(__dirname).filter((f) => {
  return f.indexOf(".") !== 0 && f !== basename && f.slice(-3) === ".js";
})) {
  const model = require(path.join(__dirname, file))(
    sequelize,
    Sequelize.DataTypes
  );
  models[model.name] = model;
}

for (const modelName of Object.keys(models)) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
}

module.exports = {
  models,
  sequelize,
  Sequelize,
};
