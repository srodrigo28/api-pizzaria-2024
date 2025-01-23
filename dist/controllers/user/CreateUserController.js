"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../services/user/CreateUserService");
class CreateUserController {
    async handle(req, res) {
        const { name, email, password } = req.body;
        const createUserService = new CreateUserService_1.CreateUserService();
        const user = await createUserService.execute({
            name, email, password
        });
        return res.json(user);
    }
}
exports.CreateUserController = CreateUserController;
