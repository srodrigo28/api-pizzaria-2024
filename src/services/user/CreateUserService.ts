import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute( {name, email, password} : UserRequest){
        // verificar se ele enviou um email valido
        if(!email){
            throw new Error("Email incorrect")
        }
        // Verificar se esse email já está cadastrado no banco
        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if(userAlreadyExist){
            throw new Error("Email already registered");
        }

        // criando padrão para criptografia
        const passwordHash = await hash(password, 3)

        // caso passar pelas validações então cadastrar
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false
            }
        })
        
        return { user }
    }
}

export { CreateUserService }