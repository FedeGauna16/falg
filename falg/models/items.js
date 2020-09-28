module.exports = (sequelize, Sequelize) => {
    const items = sequelize.define("items", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        imagen: {
            type : Sequelize.TEXT
        },
        daño: {
            type : Sequelize.INTEGER
        },
        vida: {
            type : Sequelize.INTEGER
        },
        resistencia: {
            type : Sequelize.INTEGER
        },
        mana: {
            type : Sequelize.INTEGER
        },
        cdr: {
            type : Sequelize.INTEGER
        },
        pasiva: {
            type : Sequelize.TEXT
        }
    });

    return items;

};