import express from 'express'
import './database/connection'
import path from 'path'

import routes from './routes'


const app = express()

app.use(express.json()) // Funcao para adicionar um plugin ao express para entender dados vindos por JSON
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333) //localhost:3333

// ---------------------------------------------------------------------------------------------------------------------------- //

// EXEMPLO DE ROTA
// app.get('/users/:id', (request, response) => {
//     console.log(request.query) -> passar query pela URL ex: http://localhost:3333/users/1?search=julio                  ?search=julio
//     console.log(request.params) -> passar parametro pela URL ex:  http://localhost:3333/users/1             :id = 1
//     console.log(request.body) -> passar dados de um formulario 


//     return response.json({ message: 'Hello world'})
// })



//req /res