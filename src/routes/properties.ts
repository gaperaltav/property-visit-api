import express from "express";
import { PropertyModel } from "../db/models";
import { ObjectIdValidator, propertyValidator } from "./validators";
import { authMiddleware as authorized } from "../middlewares/auth";

const router = express.Router();

router.get("/", authorized, async (req, res) => {
  const properties = await PropertyModel.find();
  res.status(200).json(properties);
});

router.get("/:id", authorized, async (req, res) => {
  const { error, value } = ObjectIdValidator.validate(req.params);

  if (error) {
    return res.status(500).json(error.message);
  }

  const property = await PropertyModel.findById(value.id);
  if (!property) {
    return res.status(404).json(`Property with id "${value.id}" is not found.`);
  }

  res.status(200).json(property);
});

router.post("/", authorized, async (req, res) => {
  const { error, value } = propertyValidator.validate(req.body);
  if (error) {
    return res.status(500).json(error.message);
  }

  try {
    const { title, tags, rooms, description, category, user } = value;

    const property = new PropertyModel({
      title,
      tags,
      rooms,
      description,
      category,
      user,
    });

    const saved = await property.save();

    res.status(200).json(saved);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default router;
