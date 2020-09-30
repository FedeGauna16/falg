module.exports = (sequelize, Sequelize) => {
    const jugadores = sequelize.define("jugadores", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        winrate: {
            type : Sequelize.INTEGER
        },
        iconPlayer: {
            type : Sequelize.TEXT
        },
    });

    return jugadores;

};