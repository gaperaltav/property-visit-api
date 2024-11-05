import express from "express";
import { UserModel } from "../db/models";
import { userValidator } from "./validators";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
});

router.post("/", async (req, res) => {
  const { error, value } = userValidator.validate(req.body);

  if (error) {
    return res.status(500).json(error.message);
  }

  const existUser = await UserModel.findOne({ email: value.email})
  if (existUser) {
    return res.status(400).json("User already exist");
  }

  try {
    const { name, lastName, email, password, role } = value;
    const user = new UserModel({
      name,
      lastName,
      email,
      password,
      role,
    });

    const userSaved = await user.save();

    // preventing returning password
    res.status(200).json({
      _id: userSaved.id,
      name: userSaved.name,
      lastName: userSaved.lastName,
      email:  userSaved.email,
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default router;
