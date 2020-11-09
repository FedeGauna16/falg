module.exports = (sequelize, Sequelize) => {

    const infoPartidas = sequelize.define("infopartidas", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    return infoPartidas;
};