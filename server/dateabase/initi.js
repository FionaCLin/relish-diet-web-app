const {Sequelize} = require('sequelize');
const config = require('./config/config.json');

const sequelize = new Sequelize({...config[process.env.NODE_ENV]});
console.log(sequelize);
