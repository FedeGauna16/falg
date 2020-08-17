module.exports = (sequelize, Sequelize) => {
    const Comentarios = sequelize.define("comentarios",
    {
        id: {
            type: Sequelize.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        idpublicacion: Sequelize.INTERGER,
        idusuario: Sequelize.INTERGER,
        comentario: Sequelize.STRING
    }
    );
    return Comentarios;
};