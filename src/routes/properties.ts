import express from "express";
import { authMiddleware as authorized } from "../middlewares/auth";
import PropertyController from "../controllers/properties";

const router = express.Router();

router.get("/", authorized, PropertyController.getAllProperties);

router.get("/:id", authorized, PropertyController.getPropertyById);

router.post("/", authorized, PropertyController.createProperty);

export default router;
