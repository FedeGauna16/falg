module.exports = (sequelize, Sequelize) => {

    const infoPartidas = sequelize.define("infopartidas", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreUno: {
            type: Sequelize.STRING
        },
        nombreDos: {
            type: Sequelize.STRING
        },
        idClaseUno: {
            type : Sequelize.INTEGER
        },
        idClaseDos: {
            type : Sequelize.INTEGER
        },
        iconClaseUno: {
            type : Sequelize.TEXT
        },
        iconClaseDos: {
            type : Sequelize.TEXT
        },
        item1Uno: {
            type : Sequelize.TEXT
        },
        item1Dos: {
            type : Sequelize.TEXT
        },
        item2Uno: {
            type : Sequelize.TEXT
        },
        item2Dos: {
            type : Sequelize.TEXT
        },
        item3Uno: {
            type : Sequelize.TEXT
        },
        item3Dos: {
            type : Sequelize.TEXT
        },
        item4Uno: {
            type : Sequelize.TEXT
        },
        item4Dos: {
            type : Sequelize.TEXT
        },
        item5Uno: {
            type : Sequelize.TEXT
        },
        item5Dos: {
            type : Sequelize.TEXT
        },
        item6Uno: {
            type : Sequelize.TEXT
        },
        item6Dos: {
            type : Sequelize.TEXT
        }
    });

    return infoPartidas;
};