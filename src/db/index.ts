import mongoose from "mongoose";
import debug from "debug";
import dotenv from "dotenv";

dotenv.config();

const { DB_URI = "" } = process.env;

const debugServer = debug("server:db");

export const dbConnect = async () => {
  return mongoose
    .connect(DB_URI)
    .then(() => {
      debugServer("Connected to database");
    })
    .catch(() => {
      debugServer("Failed to connect to database!");
    });
};
