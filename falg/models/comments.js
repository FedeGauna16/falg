module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idposts: Sequelize.INTEGER,
        idusers: Sequelize.INTEGER,
        comments: Sequelize.STRING
    }
    );
    return Comments;
};