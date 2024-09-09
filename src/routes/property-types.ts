import express from "express";

const router = express.Router();

const types = [
  { id: 1, name: "home" },
  { id: 2, name: "apartment" },
];

router.get("/", (req, res) => {
  res.json(types);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    const type = types.find((type) => type.id === Number(id));

    if (!type) {
      return res.status(404).json(`Property with id "${id}" doesn't found`);
    }
    return res.json(types);
  }
});

export default router;
