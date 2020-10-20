
import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'
import multer from 'multer' //upload das imagens
import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)


// index, show, create, update, delete

routes.get('/orphanages', OrphanagesController.index) // index ou list para listagem
routes.get('/orphanages/:id', OrphanagesController.show) // index ou list para listagem
routes.post('/orphanages', upload.array('images'), OrphanagesController.create) // create para criar um novo orfanato


export default routes;
