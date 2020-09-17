module.exports = (sequelize, Sequelize) => {
    const Userscomments= sequelize.define("userscomments");
    return Userscomments;
};