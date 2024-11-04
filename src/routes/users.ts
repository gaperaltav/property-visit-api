import express from "express";
import { UserModel } from "../db/models";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new UserModel({
      email: "email@email.com",
      password: "dfd",
      lastName: "tu amo",
      name: "jon Doe",
      role: "realtor",
    });

    const created = await user.save();
    res.status(200).json(created);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default router;
