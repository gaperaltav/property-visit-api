import mongoose from "mongoose";

interface Property {
  id: String,
  name: String;
  tags?: [String];
  rooms?: Number;
  date: Date;
}
 