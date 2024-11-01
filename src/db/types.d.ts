import mongoose, { Types } from "mongoose";

interface Property {
  name: string;
  tags?: [string];
  rooms?: number;
  parking_lots?: number;
  description?: string;
  type: string;
  address: string;
  date: Date;
}
