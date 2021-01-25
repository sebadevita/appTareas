const express = require('express')
const cors = require('cors')
const app = express()

//CONFIGURACIONES

app.set('port', process.env.PORT || 4000)


//MIDDLEWARES

app.use(cors())
app.use(express.json())

//RUTAS

app.use('/api/usuarios', require('./routes/usuarios') )
app.use('/api/tareas', require('./routes/tareas') )

module.exports = app



