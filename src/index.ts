import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config.js";
import debug from "debug";

import properties from "./routes/properties.js";
import agents from "./routes/agents.js"

import { dbConnect} from "./db"

const { env, port } = config;

const serverDebugger = debug("server:app");
const server: Express = express();

server.use(express.json());
server.use(helmet());

if (env === "development") {
  server.use(morgan("dev"));
}

// TODO: Move this connection 
// and called it only when is need it.
dbConnect();

server.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

// importing api routes
server.use("/api/properties", properties);
server.use("/api/agents", agents);

server.listen(port);
serverDebugger(`Running server on port ${port}`);
