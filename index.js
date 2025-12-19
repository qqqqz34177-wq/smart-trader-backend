import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "Smart Trader Backend is LIVE",
    time: new Date().toISOString()
  });
});

app.get("/env-check", (req, res) => {
  res.json({
    BINANCE_KEY: process.env.BINANCE_API_KEY ? "OK" : "MISSING",
    GEMINI: process.env.GEMINI_SUPPORT_KEY ? "OK" : "MISSING",
    NOWPAYMENTS: process.env.NOWPAYMENTS_API_KEY ? "OK" : "MISSING"
  });
});

app.post("/binance/connect", (req, res) => {
  const { apiKey, secretKey } = req.body;

  if (!apiKey || !secretKey) {
    return res.status(400).json({ error: "Missing keys" });
  }

  const cipher = crypto.createCipher(
    "aes-256-ctr",
    process.env.ENCRYPTION_KEY
  );

  let encryptedKey = cipher.update(secretKey, "utf8", "hex");
  encryptedKey += cipher.final("hex");

  res.json({
    message: "Binance keys received & encrypted",
    encryptedPreview: encryptedKey.substring(0, 10) + "..."
  });
});

app.post("/support/ping", (req, res) => {
  res.json({
    reply: "AI Support is LIVE and responding ✅"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
