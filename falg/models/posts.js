module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define("posts",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        iduser: Sequelize.INTEGER,
        idcomment: Sequelize.INTEGER
    }
    );
    return Posts;
};