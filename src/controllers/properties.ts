import { Request, Response } from "express";
import { PropertyModel } from "../models";
import { ObjectIdValidator, propertyValidator } from "./validators";

export const getAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await PropertyModel.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(200).json("there is an error gettign properties");
  }
};

export const getPropertyById = async (req: Request, res: Response) => {
  const { error, value } = ObjectIdValidator.validate(req.params);

  if (error) {
    return res.status(500).json(error.message);
  }

  try {
    const property = await PropertyModel.findById(value.id);
    if (!property) {
      return res
        .status(404)
        .json(`Property with id "${value.id}" is not found.`);
    }
    res.status(200).json(property);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const createProperty = async (req: Request, res: Response) => {
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
};

const PropertyController = {
  getAllProperties,
  getPropertyById,
  createProperty,
};

export default PropertyController;
