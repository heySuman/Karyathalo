import { PrismaClient, ROLE } from "@prisma/client";

const prisma = new PrismaClient();

type userProps = {
    name: string,
    email: string,
    password: string
    role: ROLE
}

async function createUserInDatabase(props : userProps){
    const user = await prisma.user.create({
        data:{
            Email: props.email,
            Name : props.name,
            Password:props.password,
            Role: props.role
        }
    })
    
    return user;
}

export {createUserInDatabase};