const router = require('express').Router();
const usuarioCtrl = require('../controllers/usuario.controller');

//Renderizar vistas

//Inicio
router.get('/', (req, res) => {
    res.render('index');
});

//Login
router.get('/login', (req, res) => {
    res.render('login/Login');
});

//Registro
router.get('/login/registro', (req, res) => {
    res.render('login/Registro');
});
 
//CRUD

//Lista todos los usuarios
router.get('/usuarios', );

//Lista un usuario por su id
router.get('/usuarios/:id', );

//Crea un usuario
router.post('/usuarios', usuarioCtrl.crearUsuario  );

//Actualiza un usuario por id
router.put('/usuarios/:id', );

//Elimina un usuario por id
router.delete('/usuarios/:id', );

module.exports = router;