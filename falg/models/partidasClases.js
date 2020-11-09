module.exports = (sequelize, Sequelize) => {
    const partidasclases = sequelize.define("partidasclases",{
        id_partida: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_clase: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    });

    return partidasclases;

};