const {Router} = require('express')

const router = Router()

const {getUsuarios, crearUsuario, eliminarUsuario} = require('../controllers/usuariosController')

router.route('/')
    .get(getUsuarios)
    .post(crearUsuario)

router.route('/:id')
    .delete(eliminarUsuario)


module.exports = router