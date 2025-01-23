"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const router = (0, express_1.Router)();
exports.router = router;
/** Routas de Users */
router.post('/', new CreateUserController_1.CreateUserController().handle);
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/teste', (req, res) => {
    //throw new Error('Erro ao fazer essa requisição');
    return res.send('Hello World!');
});
