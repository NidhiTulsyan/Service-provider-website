import express from "express";
import { addService } from "../controllers/ServiceControllers.js";
const ServiceRouter = express.Router();
ServiceRouter.post("/addService", addService);

export default ServiceRouter;
