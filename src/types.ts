import { Secret } from "jsonwebtoken";
import { Schema } from "mongoose";

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
  visits?: Visit[];
}
export interface Visit {
  date: Date;
  userId?: Schema.Types.ObjectId;
}
export interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles;
}

export type EnvConfig = {
  env: string;
  port: string | number;
  host: string;
  jwtSecretKey: Secret;
};
