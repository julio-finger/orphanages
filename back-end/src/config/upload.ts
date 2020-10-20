import multer from 'multer' //upload das imagens
import path from 'path'


export default {
    storage: multer.diskStorage({ //salvar no disco
        destination: path.join(__dirname, '..', '..', 'uploads'), // destino da pasta que ira salvar os arquivos
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}` //nome do arquivo

            cb(null, fileName); //callback
        },
    })
}
