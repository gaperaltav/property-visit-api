import express, { Express } from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const { NODE_ENV, PORT } = process.env;

const server: Express = express();

server.use(express.json());
console.log({ NODE_ENV })

if (NODE_ENV === "development") {
  server.use(morgan("dev"));
}

server.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

server.listen(PORT);

console.log(`Running server on port ${PORT}`);
