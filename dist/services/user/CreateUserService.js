"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = __importDefault(require("../../prisma"));
class CreateUserService {
    async execute({ name, email, password }) {
        // verificar se ele enviou um email valido
        if (!email) {
            throw new Error("Email incorrect");
        }
        // Verificar se esse email já está cadastrado no banco
        const userAlreadyExist = await prisma_1.default.user.findFirst({
            where: {
                email: email
            }
        });
        if (userAlreadyExist) {
            throw new Error("Email already registered");
        }
        // criando padrão para criptografia
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        // caso passar pelas validações então cadastrar
        const user = await prisma_1.default.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        return { user };
    }
}
exports.CreateUserService = CreateUserService;
