import { model } from "mongoose";
import { AgentSchema, propertySchema } from "./schemas";
import { Agent, Property } from "./types";

export const PropertyModel = model<Property>("Property", propertySchema);

export const AgentModel = model<Agent>("Agent", AgentSchema);
