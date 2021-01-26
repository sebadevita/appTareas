const tareasController = {}

const Tarea = require('../models/tarea')

tareasController.getTareas = async (req, res) => {
    const tareas = await Tarea.find()
    res.json(tareas)
}

tareasController.crearTarea = async (req, res) => {
    const {titulo, descripcion, responsable, prioridad, fecha, hecho} = req.body
    const nuevaTarea = new Tarea({
        titulo,
        descripcion,
        responsable,
        prioridad,
        fecha,
        hecho,

    })
    await nuevaTarea.save()
    res.json({ mensaje: 'Tarea guardada exitosamente!' })
}

tareasController.getUnaTarea = async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)
    res.json(tarea)
}

tareasController.actualizarTarea = async (req, res) => {
    const {titulo, descripcion, responsable, prioridad, fecha, hecho} = req.body
    await Tarea.findOneAndUpdate(req.params.id, {
        titulo,
        descripcion,
        responsable,
        prioridad,
        fecha,
        hecho,
    } )
    res.json({ mensaje: 'Tarea actualizada exitosamente!' })
}

tareasController.eliminarTarea = async (req, res) => {
    await Tarea.findByIdAndDelete(req.params.id)
    res.json({ mensaje: 'Tarea eliminada exitosamente!' })
}

module.exports = tareasController