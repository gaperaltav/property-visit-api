import { Schema, Types } from "mongoose";
import { Property } from "./types";

export const propertySchema = new Schema<Property>({
  name: String,
  rooms: Number,
  tags: [String],
  date: { type: Date, default: Date.now() },
});
