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
db.Reports = require("./reports")(sequelize, Sequelize);
db.Userscomments = require("./userscomments")(sequelize, Sequelize);
db.Usersposts = require("./usersposts")(sequelize, Sequelize);
db.infoPartidas = require("./infoPartidas")(sequelize, Sequelize);
db.clases = require("./clases")(sequelize, Sequelize);
db.jugadores = require("./jugadores")(sequelize, Sequelize);
db.items = require("./items")(sequelize, Sequelize);
db.partidasItems = require("./partidasItems")(sequelize, Sequelize);
db.partidasClases = require("./partidasClases")(sequelize, Sequelize);
db.partidasUsers = require("./partidasUsers")(sequelize, Sequelize);

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
db.Users.belongsToMany(db.Posts, {
    through: db.Usersposts,
    as: "post",
    foreignKey: "userid",
});
db.Posts.belongsToMany(db.Users, {
    through: db.Usersposts,
    as: "user",
    foreignKey: "postid", 
});
db.jugadores.hasOne(db.Users,{
    foreignKey : 'id_jugador',
});
db.Users.belongsTo(db.jugadores,{
    foreignKey : 'id',
});
db.infoPartidas.belongsToMany(db.clases, {
    through: db.partidasClases,
    foreignKey: "id_partida",
});
db.clases.belongsToMany(db.infoPartidas, {
    through: db.partidasClases,
    foreignKey: "id_clase", 
});
db.infoPartidas.belongsToMany(db.items, {
    through: db.partidasItems,
    foreignKey: "id_partida",
});
db.items.belongsToMany(db.infoPartidas, {
    through: db.partidasItems,
    foreignKey: "id_item", 
});
db.infoPartidas.belongsToMany(db.Users, {
    through: db.partidasUsers,
    foreignKey: "id_partida",
});
db.Users.belongsToMany(db.infoPartidas, {
    through: db.partidasUsers,
    foreignKey: "id_user", 
});
module.exports = db;