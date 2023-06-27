const usuarioCtrl = {};
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// Crear nuevo usuario
usuarioCtrl.crearUsuario = async (req, res) => {
    const { nombre, apellido, dni, nombre_usuario, contraseña, telefono, fecha_nac, email } = req.body;


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

    const salt = await bcrypt.genSalt(10);
    nuevoUsuario.contraseña = await bcrypt.hash(contraseña, salt);

    const usuarioCreado = await nuevoUsuario.save();

    if (!usuarioCreado) {
        throw ({
            message: 'Error al crear el usuario',
        })
    }
}
module.exports = usuarioCtrl;