import { Request, Response } from "express";
import { UserModel } from "../models";
import { userValidator } from "./validators";
import bcrypt from "bcrypt";

export const getUsers = async (req: Request, res: Response) => {
  const properties = await UserModel.find();
  res.status(200).json(properties);
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.user._id).select("-password");
  if (user?._id) {
    return res.status(200).json(user);
  }
  return res.status(401).json("Access denied. Invalid token provided.");
};

export const registerNewUser = async (req: Request, res: Response) => {
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
};

const UserController = {
  getUsers,
  getCurrentUser,
  registerNewUser,
};

export default UserController;
