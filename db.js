const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });

    const connect = async() => {
        try {
            await sequelize.sync({force: true});
            console.log('CONEXION A LA BASE DE DATOS EXITOSA')
        } catch (error) {
            console.log('ERROR AL INTENTAR CONECTAR LA BASE DE DATOS')
        }
    }

module.exports = {
    sequelize,
    DataTypes,
    connect
}
