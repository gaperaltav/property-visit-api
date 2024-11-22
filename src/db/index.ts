import mongoose from "mongoose";
import debug from "debug";
import config from "../config";

const debugServer = debug("server:db");

export function connectToDb() {
  const { host } = config;
  return mongoose
    .connect(host)
    .then(() => {
      debugServer("Connected to database");
    })
    .catch((error) => {
      debugServer("Failed to connect to database!", { message: error.message });
    });
}
