import Router from "express"
import { createUser, signin } from "../../controller/authentication/auth.controller";

const router = Router()

// login
router.post("/register", createUser);
router.post("/login", signin);

export default router;