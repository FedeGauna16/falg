module.exports = (sequelize, Sequelize) => {
    const Publicaciones = sequelize.define("publicaciones",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        titulo: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        idusuario: Sequelize.INTEGER,
        idcomentario: Sequelize.INTEGER
    }
    );
    return Publicaciones;
};