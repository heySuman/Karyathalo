import express from "express";
import userRouter from "./routes/authentication/auth.routes"

const app = express();

const PORT = 3000;
app.use(express.json());

app.use("/api/user", userRouter);

app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
})