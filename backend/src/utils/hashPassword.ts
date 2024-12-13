import bcrypt from "bcryptjs"

async function hashPassword(password: string){
    const hashedPassword = await bcrypt.hash(password,10);
    return hashedPassword; 
}

export {hashPassword};