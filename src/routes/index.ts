import express, { Express } from "express";
import helmet from "helmet";

import properties from "./properties.js";
import users from "./users.js";
import auth from "./auth.js";

export function loadingApiRoutes(app: Express) {
  app.use(express.json());
  app.use(helmet());
  app.use("/api/properties", properties);
  app.use("/api/users", users);
  app.use("/auth", auth);
}
