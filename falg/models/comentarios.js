module.exports = (sequelize, Sequelize) => {
    const Comentarios = sequelize.define("comentarios",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        idpublicacion: Sequelize.INTEGER,
        idusuario: Sequelize.INTEGER,
        comentario: Sequelize.STRING
    }
    );
    return Comentarios;
};