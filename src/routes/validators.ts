import baseJoi from "joi";
import joiObjectId from "@marsup/joi-objectid";
import { Roles } from "../types";

const Joi = baseJoi.extend(joiObjectId);

export const propertyValidator = Joi.object({
  title: Joi.string(),
  category: Joi.string().required(),
  description: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  rooms: Joi.number(),
  user: Joi.objectId().required(),
});

export const postPropertyValidator = propertyValidator.schema({
  id: Joi.objectId().required(),
});

export const userValidator = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().required().valid(),
});

export const postUserValidator = userValidator.schema({
  id: Joi.objectId().required(),
});

export const ObjectIdValidator = Joi.object({
  id: Joi.objectId().required(),
});
