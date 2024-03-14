import { Router, Response, Request } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

/** Routas de Users */
router.post('/', new CreateUserController().handle)
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/teste', (req: Request, res: Response) => {
    //throw new Error('Erro ao fazer essa requisição');

    return res.send('Hello World!');
})

export { router }