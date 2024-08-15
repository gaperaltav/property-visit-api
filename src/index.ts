import express, { Express } from "express";
import config from "config";

const server: Express = express();

const { NODE_ENV, PORT } = process.env;

server.use(express.json());

if (NODE_ENV === "development") {
  server.use(require("morgan")("dev"));
}

server.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

server.listen(config.port);

console.log(`Running server on port ${config.port}`);
