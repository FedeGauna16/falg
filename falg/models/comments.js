module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        likes: Sequelize.INTEGER,
        comment: Sequelize.STRING,
        idpost: Sequelize.INTEGER
    }
    );
    return Comments;
};