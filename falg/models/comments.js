module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idpost: Sequelize.INTEGER,
        comment: Sequelize.STRING
    }
    );
    return Comments;
};