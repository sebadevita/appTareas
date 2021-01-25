const tareasController = {}

tareasController.getTareas = (req, res) => res.json({mensaje: []})

tareasController.crearTarea = (req, res) => res.json({mensaje: 'Tarea guardada exitosamente!'})

tareasController.getUnaTarea = (req, res) => res.json({titulo: 'Titulo de prueba'})

tareasController.actualizarTarea = (req, res) => res.json({mensaje: 'Tarea actualizada exitosamente!'})

tareasController.eliminarTarea = (req, res) => res.json({mensaje: 'Tarea eliminada exitosamente!'})

module.exports = tareasController