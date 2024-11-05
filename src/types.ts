import mongoose, { Schema } from "mongoose";

export enum Roles {
  Admin = "admin",
  Realtor = "realtor",
}

export enum PropertyCategories {
  House = "house",
  Apartment = "apartment",
  Land = "land",
  Commertial = "commertial",
  Industrial = "industrial",
}

export interface Property {
  title: string;
  tags?: [string];
  rooms?: number;
  parking_lots?: number;
  description?: string;
  category: PropertyCategories;
  address: string;
  created_date: Date;
  user: Schema.Types.ObjectId;
}

export interface Visit {
  date: Date;
}

export interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles;
}
