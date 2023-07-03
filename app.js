//Importaciones
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

//Conexion a la base de datos
const { connect } = require('./db');
connect();

const app = express();
const port = process.env.PORT || 3000;

const Usuario = require('./src/models/Usuario');

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');

//Archivo estático
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS
app.use(require('./src/routes/usuario.routes'))

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
});