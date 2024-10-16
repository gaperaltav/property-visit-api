import mongoose from "mongoose";
import debug from "debug";

const debugServer = debug("server:db");

export const dbConnect = async () => {
  return mongoose
    .connect("mongodb://localhost/property-visit")
    .then(() => {
      debugServer("Connected to database");
    })
    .catch(() => {
      debugServer("Failed to connect to database!");
    });
};
