import { Router, Response, Request } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

const router = Router();

/** Routas de Users */
router.post('/', new CreateUserController().handle)
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', new DetailUserController().handle)

router.get('/teste', (req: Request, res: Response) => {
    return res.send('Hello World!');
})

export { router }