import express from "express";
import { authMiddleware } from "../middlewares/auth";
import UsersController from "../controllers/users";

const router = express.Router();

router.get("/", authMiddleware, UsersController.getUsers);

router.get("/current", authMiddleware, UsersController.getCurrentUser);

router.post("/register", UsersController.registerNewUser);

export default router;
