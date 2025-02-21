import { login, Register } from "../controllers/UserControllers.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/register",Register);
userRouter.get("/login",login);

export default userRouter;
