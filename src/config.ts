import dotenv from "dotenv";
import { EnvConfig } from "./types";

dotenv.config();

const { NODE_ENV, PORT, DB_HOST, JWT_SECRET_KEY } = process.env;

const config: EnvConfig = {
  env: NODE_ENV || "development",
  port: PORT || 8080,
  host: DB_HOST || "mongodb://localhost/property-visit",
  jwtSecretKey: JWT_SECRET_KEY || '',
};

export default config;
