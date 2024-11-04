import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("you logged in");
});

export default router;
