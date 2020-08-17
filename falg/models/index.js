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

db.Publicaciones = require("./publicaciones")(sequelize, Sequelize);
db.Comentarios = require("./comentarios")(sequelize, Sequelize);

module.exports = db; addEventListener;