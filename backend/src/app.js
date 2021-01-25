const express = require('express')
const cors = require('cors')
const app = express()

//CONFIGURACIONES

app.set('port', process.env.PORT || 4000)


//MIDDLEWARES

app.use(cors())
app.use(express.json())

//RUTAS

app.get('/api/usuarios', (req, res) => res.send('Usuarios routes'))
app.get('/api/tareas', (req, res) => res.send('Tareas routes'))

module.exports = app



