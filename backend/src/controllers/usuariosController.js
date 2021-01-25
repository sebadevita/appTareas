const usuarioController = {}

usuarioController.getUsuarios = (req, res) => res.send({mensaje: []})

usuarioController.crearUsuario = (req, res) => res.json({mensaje: 'Usuario guardado exitosamente!'})

usuarioController.eliminarUsuario = (req, res) => res.json({mensaje: 'Usuario eliminado exitosamente!'})

module.exports = usuarioController