import { Schema } from "mongoose";
import { Property } from "./types";

export const propertySchema = new Schema<Property>({
  name: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true,
  },
  rooms: { type: Number, default: null },
  parking_lots: { type: Number, default: null },
  address: { type: String, default: null },
  type: {
    type: String,
    enum: ["house", "apartment", "land"],
    lowercase: true,
    required: true,
  },
  tags: [String],
  date: { type: Date, default: Date.now() },
});
