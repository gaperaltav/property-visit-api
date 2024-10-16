import express, { response } from "express";
import { PropertyModel } from "../db/models";
import { getPropertyValidator } from "./validators";

const router = express.Router();

router.get("/", async (req, res) => {
  const properties = await PropertyModel.find();
  res.json(properties);
});

router.get("/:id", async (req, res) => {
  const { error, value } = getPropertyValidator.validate(req.params);

  if (error) {
    return res.status(500).json(error.message);
  }

  const property = await PropertyModel.findById(value.id);

  if (!property) {
    return res.status(404).json(`Property with id "${value.id}" is not found.`);
  }
  res.json(property);
});

router.post("/", async (req, res) => {
  // TODO: Add this with Endpoints body
  await PropertyModel.create({
    name: " Example property",
    date: new Date(),
    tags: ["penthouse"],
    rooms: 2,
  });
  res.json("object created");
});

export default router;
