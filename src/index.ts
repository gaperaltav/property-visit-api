import express, { Express } from "express";
import morgan from "morgan";
import config from "./config.js";

import propertyTypes from "./routes/property-types.js";

const { env, port } = config;

const server: Express = express();

server.use(express.json());

console.log({ config });

if (env === "development") {
  server.use(morgan("dev"));
}

server.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

// importing api routes
server.use("/api/property-types", propertyTypes);

server.listen(port);
console.log(`Running server on port ${port}`);
