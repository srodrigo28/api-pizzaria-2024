import multer from 'multer'
import { Router, Response, Request } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { ListUserController } from "./controllers/user/ListUserController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

/** Routas de Users */

router.get('/', (req: Request, res: Response) => {
    return res.send('API Delivery Treina Dev 62 9 9857-9084');
})

//-- ROTAS USERS
router.post('/users', new CreateUserController().handle)
router.get('/users', new ListUserController().handle)

router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated,  new DetailUserController().handle)

//-- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//-- ROTAS CATEGORY
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)



export { router }