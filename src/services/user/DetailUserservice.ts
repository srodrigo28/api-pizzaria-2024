import prismaClient from "../../prisma";

class DetailUserservice{
    async execute(){
        return { ok: true }
    }
}

export { DetailUserservice }