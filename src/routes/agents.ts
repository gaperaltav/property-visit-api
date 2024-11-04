import express from "express";
import { AgentModel } from "../db/models";

const router = express.Router();

router.get("/", async (req, res) => {
  const agents = await AgentModel.find();
  res.json(agents);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const agent = await AgentModel.findById(id);
  if (!agent) {
    return res.status(404).json(`Agent with id "${id}" is not found.`);
  }
  res.json(agent);
});

router.post("/", async (req, res) => {
  // TODO: Add this with Endpoints body
  try {
    await AgentModel.create({
      name: "Jhon",
      lastName: "Doe",
      email: "jdoe123@gmail.com",
    });
  } catch (error: any) {
    res.status(500).json(error.message);
  }

  res.json("New Agent created!");
});

export default router;
