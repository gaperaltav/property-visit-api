import { Schema } from "mongoose";

export const propertySchema = new Schema<Property>({
  id: String,
  name: String,
  rooms: Number,
  tags: [String],
  date: String,
});
