module.exports = (sequelize, Sequelize) => {

    const infoPartidas = sequelize.define("infoPartidas", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        jugador: {
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        idClase: {
            type : Sequelize.INTEGER
        },
        iconClase: {
            type : Sequelize.TEXT
        },
        item1: {
            type : Sequelize.TEXT
        },
        item2: {
            type : Sequelize.TEXT
        },
        item3: {
            type : Sequelize.TEXT
        },
        item4: {
            type : Sequelize.TEXT
        },
        item5: {
            type : Sequelize.TEXT
        },
        item6: {
            type : Sequelize.TEXT
        }

    });

    return infoPartidas;
};