import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

import itemController from './controllers/items/itemControllers';
import pointController from './controllers/points/pointControllers';

routes.get('/items', itemController.index);

routes.post('/points', upload.single('image'), pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;