module.exports = (sequelize, Sequelize) => {
    const Usersposts= sequelize.define("usersposts");
    return Usersposts;
};