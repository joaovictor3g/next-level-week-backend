import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import { Joi, celebrate, Segments } from 'celebrate';

const routes = Router();
const upload = multer(multerConfig);

import itemController from './controllers/items/itemControllers';
import pointController from './controllers/points/pointControllers';

routes.get('/items', itemController.index);

routes.post('/points', 
    upload.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        }),
    }, {
        abortEarly: false
    }), pointController.create
);

routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);
routes.get('/list-points', pointController.getPointByCityAndUf);
routes.delete('/delete/:id', pointController.delete);

export default routes;