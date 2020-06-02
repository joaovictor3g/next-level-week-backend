import { Router, Request, Response } from 'express';

const routes = Router();

import itemController from './controllers/itemControllers';

routes.get('/items', itemController.create);

export default routes;