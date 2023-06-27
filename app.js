const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const miRuta = require('./src/routes/usuario.routes');
const Usuario = require('./src/models/Usuario');
const { sequelize, connect } = require('./db');

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');

// RUTAS
app.use('/api', miRuta);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});