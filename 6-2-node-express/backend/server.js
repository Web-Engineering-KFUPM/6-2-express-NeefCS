import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// ===============================================================
// TODO 1: Initialize Express App
// ===============================================================
// Goal: Set up the Express server.
const app = express();
const PORT = 3000;

// ===============================================================
// TODO 4: Enable CORS
// ===============================================================
// Goal: Allow frontend (port 5173) to communicate with backend.
app.use(cors());

// ===============================================================
// TODO 5: Define Routes
// ===============================================================
// 5.1 Root route — send a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the Quote Generator API");
});

// 5.2 Quote API route — return random quote as JSON
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// ===============================================================
// Create Server
// ===============================================================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
