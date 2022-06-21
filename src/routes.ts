import express from "express";

export const routes = express.Router();

routes.get("/recipes", async (req, res) => {
  const { query } = req;

  if (!query.app) {
    return res.status(400).json({ error: true, message: "Aplicação não permitida" });
  }

  return res.json({
    recipes: [],
  });
});

routes.post("/recipes", async (req, res) => {
  const { body, query } = req;

  console.log(query);
  console.log(body);
});
