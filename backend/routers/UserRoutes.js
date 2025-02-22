import { login, Register } from "../controllers/UserControllers.js";
import express from "express";
const userRouter = express.Router();
userRouter.post("/register",Register);
userRouter.post("/login",login);

export default userRouter;
