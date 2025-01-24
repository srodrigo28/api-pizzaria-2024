import { Router, Response, Request } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

/** Routas de Users */
router.post('/', new CreateUserController().handle)
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated,  new DetailUserController().handle)

router.get('/teste', (req: Request, res: Response) => {
    return res.send('Hello World!');
})

export { router }