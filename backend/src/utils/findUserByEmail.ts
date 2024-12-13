import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findUserByEmail(email :string){
    const user = await prisma.user.findUnique({
        where: {
            Email: email
        }
    })

    if(user){
        return user;
    }
    
    return null;
}

export {findUserByEmail};