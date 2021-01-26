const usuarioController = {}

const Usuario = require('../models/usuario')

usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioController.crearUsuario = async (req, res) => {
    const{username, nombre} = req.body
    const nuevoUsuario = new Usuario({
        username,
        nombre
    })
    await nuevoUsuario.save()
    res.json({mensaje: 'Usuario guardado exitosamente!'})
}

usuarioController.eliminarUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({mensaje: 'Usuario eliminado exitosamente!'})
}

module.exports = usuarioController