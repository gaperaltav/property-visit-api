import mongoose, { Types } from "mongoose";

interface Property {
  name: string;
  tags?: [string];
  rooms?: number;
  parking_lots?: number;
  type: string;
  address: string;
  date: Date;
}
