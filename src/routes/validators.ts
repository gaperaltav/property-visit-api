import Joi from "joi";

export const propertyTypeValidator = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

export const propertyValidator = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  property_title: Joi.string().required(),
  type: Joi.number().required(),
  rooms: Joi.number(),
});
