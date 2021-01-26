const {Schema, model} = require('mongoose')


const tareaSchema = new Schema ({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    responsable: String,
    prioridad: String,
    hecho: Boolean,

timestamps: true

})

module.exports = model('Tarea', tareaSchema)