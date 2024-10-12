import mongoose from "mongoose";
import debug from "debug";

const debugDb = debug("server:db");

export const connectToDatabase = async () => {
  return mongoose
    .connect("mongodb://localhost/property-visit")
    .then(() => {
      debugDb("Connected to database");
    })
    .catch(() => {
      debugDb("Failed to connect to database!");
    });
};
