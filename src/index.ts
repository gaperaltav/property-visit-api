import express, { Express } from "express";
import morgan from "morgan";
import config from "./config";
import debug from "debug";

import { connectToDb } from "./db";
import { loadApiRoutes } from "./routes/index.js";

const { env, port, jwtSecretKey } = config;

if (!jwtSecretKey) {
  console.error("FATAL ERROR: JWT_SECRET_KEY is not defined.");
  process.exit(1);
}

const serverDebugger = debug("server:app");
const app: Express = express();

if (env === "development") {
  app.use(morgan("dev"));
}

// Connecting to MongoDB
connectToDb();
// Loading api routes
loadApiRoutes(app);

app.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

app.listen(port);
serverDebugger(`Running server on port ${port}`);
