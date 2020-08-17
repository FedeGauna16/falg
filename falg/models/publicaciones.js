module.exports = (sequelize, Sequelize) => {
    const Publicaciones = sequelize.define("publicaciones",
    {
        id: {
            type: Sequelize.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        titulo: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        idusuario: Sequelize.INTERGER,
        idcomentario: Sequelize.INTERGER
    }
    );
    return Publicaciones;
};