import { Request, Response } from "express";
import { findUserByEmail } from "../../utils/findUserByEmail";
import { hashPassword } from "../../utils/hashPassword";
import { createUserInDatabase } from "../../utils/createUser";

async function createUser(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the user already exists
        const user = await findUserByEmail(email);
        if (user) {
            return res.status(409).json({ error: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Insert into the database
        const newUser = await createUserInDatabase({
            name :name,
            email: email,
            password: hashedPassword,
            role: role
        });

        // Send response with the created user's ID
        res.status(201).json({ userId: newUser.User_ID });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function signin(req: Request, res: Response) {
    console.log(req.body);
    res.send("Thank you for the service");
}

export { createUser, signin };
