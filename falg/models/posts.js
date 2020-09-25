module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define("posts",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        likes: Sequelize.INTEGER,
        dislikes: Sequelize.INTEGER,
        iduser: Sequelize.INTEGER,
        idcomment: Sequelize.INTEGER
    }
    );
    return Posts;
};