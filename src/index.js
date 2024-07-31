const express = require("express");
const debug = require("debug")("server");

const app = express();

const { NODE_ENV, PORT } = process.env;

app.use(express.json());

if (NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}

app.get("/api", (req, res) => {
  res.send("Welcome to properties API.");
});

app.listen(PORT);

debug(`Running server on port ${PORT}`);
