module.exports = (sequelize, Sequelize) => {
    const partidasusers = sequelize.define("partidasusers",{
        id_partida: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    });

    return partidasusers;

};