import express from "express";
import { UserModel } from "../db/models";
import { userValidator } from "./validators";
import bcrypt from "bcrypt";
import { authMiddleware } from "../middleware/auth-middleware";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
});

router.get("/current", authMiddleware, async (req, res) => {
  const user = await UserModel.findById(req.user._id).select("-password");
  if (user?._id) {
    return res.status(200).json(user);
  }
  return res.status(401).json("Access denied. Invalid token provided.");
});

router.post("/register", async (req, res) => {
  const { error, value } = userValidator.validate(req.body);

  if (error) {
    return res.status(500).json(error.message);
  }

  const existUser = await UserModel.findOne({ email: value.email });
  if (existUser) {
    return res.status(400).json("User already exist");
  }

  try {
    const { name, lastName, email, password, role } = value;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      name,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    const userSaved = await user.save();

    // preventing returning password
    res.status(200).json({
      _id: userSaved.id,
      name: userSaved.name,
      lastName: userSaved.lastName,
      email: userSaved.email,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default router;
