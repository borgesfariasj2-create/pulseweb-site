import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.PLACE_ID;

app.get("/reviews", async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.result.reviews || []);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar avaliações" });
  }
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
