const {Schema, model} = require('mongoose')


const usuarioSchema = new Schema ({
    nombre: String,
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }},

    {timestamps: true}

)

//En mongo se crea la coleccion Usuarios
module.exports = model('Usuario', usuarioSchema)