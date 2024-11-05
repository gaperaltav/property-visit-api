import { Schema } from "mongoose";
import { Property, PropertyCategories, Roles, User } from "../types";

export const userSchema = new Schema<User>({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  password: {
    type: String,
    minlength: 7,
    maxlength: 1024,
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
    unique: true,
  },
  role: {
    type: String,
    validate: {
      validator: function (value) {
        return Object.values(Roles).includes(value);
      },
      message: "This is not a valid Role",
    },
  },
});

export const propertySchema = new Schema<Property>({
  title: {
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
  rooms: { type: Number, default: null, required: false },
  parking_lots: { type: Number, default: null },
  address: { type: String, default: null },
  category: {
    type: String,
    lowercase: true,
    required: true,
    validate: {
      validator: function (value) {
        return Object.values(PropertyCategories).includes(value);
      },
      message: "This is not a valid Category",
    },
  },
  tags: [String],
  user: { type: Schema.ObjectId, ref: "user" },
  created_date: { type: Date, default: Date.now() },
});
