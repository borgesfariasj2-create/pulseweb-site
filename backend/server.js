// server.js
import express from "express";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();

const API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = "ChIJ77q7EAxFpJQRnFxtYZMMN64";

app.get("/reviews", async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      return res.json([]);
    }

    res.json(data.result.reviews);
  } catch (error) {
    console.error("Erro ao buscar reviews:", error);
    res.status(500).json({ error: "Erro ao buscar reviews" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
