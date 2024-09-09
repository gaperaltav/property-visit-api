import Joi from "joi";

export const propertyTypeValidator = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});
