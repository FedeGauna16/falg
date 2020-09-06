module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idpost: Sequelize.INTEGER,
        iduser: Sequelize.INTEGER,
        comment: Sequelize.STRING
    }
    );
    return Comments;
};