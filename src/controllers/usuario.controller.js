const Usuario = require('../models/Usuario');
const usuarioCtrl = {};
/* const bcrypt = require('bcrypt'); */

usuarioCtrl.inicio = (req, res) => {
    res.render('index');
}

usuarioCtrl.login = (req, res) => {
    res.render('login/Login');
}

usuarioCtrl.registro = (req, res) => {
    res.render('login/Registro');
}

usuarioCtrl.email = (req, res) => {
    res.render('login/email')
}
usuarioCtrl.telefono = (req, res) => {
    res.render('login/telefono')
}


// Crear nuevo usuario
usuarioCtrl.crearUsuario = async (req, res) => {
    const { 
        nombre,
        apellido, 
        dni, 
        nombre_usuario, 
        contraseña, 
        telefono, 
        fecha_nac, 
        email
     } = req.body;

        try {
            // Se crea una nueva instancia de reserva
            const nuevoUsuario = new Usuario({
                nombre,
                apellido, 
                dni, 
                nombre_usuario, 
                contraseña, 
                telefono, 
                fecha_nac, 
                email
            });
    
            // Se guarda en la BD
            await nuevoUsuario.save();
    
            return res.status(201).json({ message: 'Usuario creado con éxito' })
        } catch (error) {
            console.log('Error al crear Usuario', error);
            return res.status(500).json({ message: 'Error al crear Usuario' })
        }
    }
    


module.exports = usuarioCtrl;