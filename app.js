const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

const { sequelize, connect } = require('./db');
const Usuario = require('./models/Usuario');

const app = express();

connect();

app.get('/', async(req, res) => {
    Usuario.findAll()
})

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');


const port = 3000
app.listen(port, console.log(`Servidor corriendo en el puerto ${port}`));