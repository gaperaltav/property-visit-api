import mongoose from "mongoose";
import debug from "debug";

const debugServer = debug("server:db");

export const connectToDB = async (connectionString: string) => {
  return mongoose
    .connect(connectionString)
    .then(() => {
      debugServer("Connected to database");
    })
    .catch((error) => {
      debugServer("Failed to connect to database!", { message: error.message });
    });
};
