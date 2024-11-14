import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config.js";
import debug from "debug";

import properties from "./routes/properties.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";

import { connectToDB } from "./db";
import { allowedResource } from "./middleware/auth.js";

const { env, port, host, jwtSecretKey } = config;

if (!jwtSecretKey) {
  console.error("FATAL ERROR: JWT_SECRET_KEY is not defined.");
  process.exit(1);
}

const serverDebugger = debug("server:app");
const server: Express = express();

server.use(express.json());
server.use(helmet());

// Custom middlewares
server.use(allowedResource);

if (env === "development") {
  server.use(morgan("dev"));
}

// Connecting to MongoDB
connectToDB(host);

server.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

// Importing api routes
server.use("/api/properties", properties);
server.use("/api/users", users);
server.use("/auth", auth);

server.listen(port);
serverDebugger(`Running server on port ${port}`);
