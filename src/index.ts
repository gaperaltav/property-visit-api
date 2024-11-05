import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config.js";
import debug from "debug";

import properties from "./routes/properties.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";

import { connectToDB } from "./db";

const { env, port, connectionString } = config;

const serverDebugger = debug("server:app");
const server: Express = express();

server.use(express.json());
server.use(helmet());

if (env === "development") {
  server.use(morgan("dev"));
}

// Connecting to MongoDB
connectToDB(connectionString);

server.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

// importing api routes
server.use("/api/properties", properties);
server.use("/api/users", users);
server.use("/auth/login", auth);

server.listen(port);
serverDebugger(`Running server on port ${port}`);
