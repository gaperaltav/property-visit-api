import dotenv from "dotenv";

dotenv.config();

const { NODE_ENV, PORT, DB_URI } = process.env;

const config = {
  env: NODE_ENV || "development",
  port: PORT || 8080,
  connectionString: DB_URI || "mongodb://localhost/property-visit",
};

export default config;
