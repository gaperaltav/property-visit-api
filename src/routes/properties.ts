import express from "express";
import { PropertyModel } from "../db/models";
import mongoose, { mongo } from "mongoose";

const router = express.Router();

router.get("/", async (req, res) => {
  const properties = await PropertyModel.find();

  res.json(properties);
});

router.post("/", async (req, res) => {
  // TODO: add logic for post endpoint 
  res.json("object created")
});

export default router;
