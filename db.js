const { Sequelize, Model, DataTypes } = require('sequelize');

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
            console.log('Base de datos conectada')
        } catch (error) {
            console.log('Error al conectar la base de datos')
        }
    }

module.exports = {
    sequelize,
    DataTypes,
    Model,
    connect
}
