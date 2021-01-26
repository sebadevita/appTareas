const {Schema, model} = require('mongoose')


const usuarioSchema = new Schema ({
    nombre: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
timestamps: true

})

module.exports = model('Usuario', usuarioSchema)