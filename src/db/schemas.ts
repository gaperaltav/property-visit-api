import { Schema } from "mongoose";
import { Property, Agent } from "./types";

export const AgentSchema = new Schema<Agent>({
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.includes("@");
      },
      message: "this is not a valid email",
    },
  },
});

export const propertySchema = new Schema<Property>({
  name: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true,
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: false,
  },
  rooms: { type: Number, default: null },
  parking_lots: { type: Number, default: null },
  address: { type: String, default: null },
  category: {
    type: String,
    enum: ["house", "apartment", "land", "commertial"],
    lowercase: true,
    required: true,
  },
  tags: [String],
  agent: { type: Schema.ObjectId, ref: 'agent' },
  created_date: { type: Date, default: Date.now() },
});
