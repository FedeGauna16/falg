module.exports = (sequelize, Sequelize) => {

    const clases = sequelize.define("clases", {

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
        loserate: {
            type : Sequelize.INTEGER
        },
        iconClass: {
            type : Sequelize.TEXT
        }
        
    });

    return clases;
};