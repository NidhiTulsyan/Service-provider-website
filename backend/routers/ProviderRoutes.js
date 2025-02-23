import express from "express";
import { register } from "../controllers/ProviderControllers.js";
const ProviderRouter = express.Router()
ProviderRouter.post("/register",register);
export default ProviderRouter;