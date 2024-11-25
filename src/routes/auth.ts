import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authValidator } from "./validators";
import { UserModel } from "../models";
import config from "../config";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { error } = authValidator.validate(req.body);

  if (error) return res.status(400).json(error.message);

  const user = await UserModel.findOne({ email: req.body.email });

  if (!user)
    return res.status(400).json("This is not a valid email or password");

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isValidPassword)
    return res.status(400).json("This is not a valid email or password");

  const payload = {
    _id: user.id,
    name: user.name,
    lastName: user.lastName,
    role: user.role,
  };

  const token = jwt.sign(payload, config.jwtSecretKey);

  res.status(200).json({ token });
});

export default router;
