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
    fecha:{
        type: Date,
        default: Date.now,

    }
},

{timestamps: true}

)

//En mongo se crea la coleccion Tareas
module.exports = model('Tarea', tareaSchema)