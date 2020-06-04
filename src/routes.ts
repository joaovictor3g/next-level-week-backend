import { Router } from 'express';

const routes = Router();

import itemController from './controllers/items/itemControllers';
import pointController from './controllers/points/pointControllers';

routes.get('/items', itemController.index);

routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;