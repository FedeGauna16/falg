module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        country: Sequelize.STRING,
        sex: Sequelize.STRING,
        age: Sequelize.INTEGER,
        description: Sequelize.STRING,
        connect: Sequelize.BOOLEAN,
        level: {
            type: Sequelize.INTEGER,
            defaultValue: '0'
        },
        image: {
            type: Sequelize.STRING,
            defaultValue: "https://muellestock.com/images/usuario-anonimo.png"
        }
    }
    );
    return Users;
};