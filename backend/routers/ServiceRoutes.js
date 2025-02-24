import express from "express";
import { addService, rateService } from "../controllers/ServiceControllers.js";
const ServiceRouter = express.Router();
ServiceRouter.post("/addService", addService);
ServiceRouter.post("/:serviceId/rate", rateService);

export default ServiceRouter;
