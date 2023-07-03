const router = require('express').Router();
const { 
    inicio,
    login,
    registro,
    crearUsuario,
    email,
    telefono
} = require('../controllers/usuario.controller')


//RUTAS PARA RENDERIZAR VISTAS

//Inicio
router.get('/', inicio)

//Login
router.get('/login/login', login);

//Registro
router.get('/login/registro', registro);
 
//Email
router.get('/login/email', email);

//Telefono 
router.get('/login/email/telefono', telefono)

//RUTAS PARA CRUD

//Lista todos los usuarios
router.get('/usuarios', );

//Lista un usuario por su id
router.get('/usuarios/:id', );

//Crea un usuario
router.post('/usuarios', crearUsuario  );

//Actualiza un usuario por id
router.put('/usuarios/:id', );

//Elimina un usuario por id
router.delete('/usuarios/:id', );

module.exports = router;