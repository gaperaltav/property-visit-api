import dotenv from "dotenv";

dotenv.config();

const { NODE_ENV, PORT } = process.env;

const config = {
  env: NODE_ENV || "development",
  port: PORT || 8080,
};

export default config;
