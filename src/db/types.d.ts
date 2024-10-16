import mongoose, { Types } from "mongoose";

interface Property {
  name: String;
  tags?: [String];
  rooms?: Number;
  date: Date;
}
