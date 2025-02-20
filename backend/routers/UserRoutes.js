import { Register } from "../controllers/UserControllers.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/register",Register);

export default userRouter;
