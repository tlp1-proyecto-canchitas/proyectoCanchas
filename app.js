const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

require('dotenv').config();

const { sequelize, connect } = require('./db');
const Usuario = require('./models/Usuario');
const router = require('./routes/usuario.routes');

const app = express();

const port = process.env.PORT || 6000;

// connect();

// app.use('/', async(req, res) => {
//     Usuario.findAll();
// })

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');

// RUTAS
app.use('/crear-usuario', router);

app.listen(port, console.log(`Servidor corriendo en http://localhost:${port}`));