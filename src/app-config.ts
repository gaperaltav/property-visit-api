import config from "config";
import { EnvConfig } from "./types";

const { NODE_ENV } = process.env;

const envConfig: EnvConfig = {
  env: NODE_ENV || "development",
  port: config.get("server.port") || 8080,
  host: config.get("db.host") || "mongodb://localhost/property-visit",
  jwtSecretKey: config.get("jwtSecret") || "secret",
};

export default envConfig;
