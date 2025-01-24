import prismaClient from "../../prisma";

class ListUserService{
    async execute(){

        const user = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                updated_at: true,
                created_at: true,
            }
        })
        return user
    }
}

export { ListUserService }