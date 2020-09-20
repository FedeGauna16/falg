module.exports = (sequelize, Sequelize) => {
    const Reports = sequelize.define("reports",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: Sequelize.STRING,
        iduser: Sequelize.INTEGER
    }
    );
    return Reports;
};