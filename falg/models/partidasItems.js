module.exports = (sequelize, Sequelize) => {
    const partidasitems = sequelize.define("partidasitems",{
        id_partida: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        id_item: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    });

    return partidasitems;

};