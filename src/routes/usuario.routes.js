const router = require('express').Router();
const usuarioCtrl = require('../controllers/usuario.controller');
 
//Lista todos los usuarios
router.get('/usuarios', );

//Lista un usuario por su id
router.get('/usuarios/:id', );

//Crea un usuario
router.post('/usuarios', );

//Actualiza un usuario por id
router.put('/usuarios/:id', );

//Elimina un usuario por id
router.delete('/usuarios/:id', );

module.exports = router;