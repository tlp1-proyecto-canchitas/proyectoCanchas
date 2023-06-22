const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const { sequelize, connect } = require('./db');
const Usuario = require('./models/usuarios');

const app = express();

connect();

app.get('/', async(req, res) => {
    Usuario.findAll()
})

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = 4000
app.listen(port, console.log(`Servidor corriendo en el puerto 4000`));