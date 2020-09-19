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
db.Userscomments = require("./userscomments")(sequelize, Sequelize);
db.Users.belongsToMany(db.Comments, {
    through: db.Userscomments,
    as: "comment",
    foreignKey: "userid",
});
db.Comments.belongsToMany(db.Users, {
    through: db.Userscomments,
    as: "user",
    foreignKey: "commentid", 
});
db.infoPartidas = require("./infoPartidas")(sequelize, Sequelize);
db.clases = require("./clases")(sequelize, Sequelize);
db.jugadores = require("./jugadores")(sequelize, Sequelize);


module.exports = db;