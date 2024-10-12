import { model } from "mongoose";
import { propertySchema } from "./schemas";
import { Property } from "./types";

export const PropertyModel = model<Property>("Property", propertySchema);
