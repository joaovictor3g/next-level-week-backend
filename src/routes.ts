import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json([
        {
            name: "João",
            id: 1
        },

        {
            name: "Diego",
            id: 2
        }
    ])
});

export default routes;