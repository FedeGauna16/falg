const Sequelize = require("sequelize");
const dbConfig = require("../config/config.js");

const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Posts = require("./posts")(sequelize, Sequelize);
db.Comments = require("./comments")(sequelize, Sequelize);
db.Users = require("./users")(sequelize, Sequelize);

module.exports = db;