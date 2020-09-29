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
        level: Sequelize.INTEGER
    }
    );
    return Users;
};