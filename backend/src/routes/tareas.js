const {Router} = require('express')

const router = Router()

const {getTareas, crearTarea, getUnaTarea, eliminarTarea, actualizarTarea} = require('../controllers/tareasController')

router.route('/')
    .get(getTareas)
    .post(crearTarea)

router.route('/:id')
    .get(getUnaTarea)
    .put(actualizarTarea)
    .delete(eliminarTarea)

module.exports = router

