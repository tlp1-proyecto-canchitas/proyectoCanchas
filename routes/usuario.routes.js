const router = require('express').Router();

const usuarioCtrl = require('../controllers/usuario.controller');
 
router.get('/', (req, res)=>{

    res.render('usuario/nuevo_usuario');

});
router.post('/', usuarioCtrl.crearUsuario);

module.exports = router;