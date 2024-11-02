import mongoose, { Schema, Types } from "mongoose";

export interface Property {
  name: string;
  tags?: [string];
  rooms?: number;
  parking_lots?: number;
  description?: string;
  category: string;
  address: string;
  created_date: Date;
  agent: Schema.Types.ObjectId;
}

export interface Agent {
  name: string;
  lastName: string;
  email: string;
}

export interface Visit {
  date: Date;
}
