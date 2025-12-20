// index.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "Smart Trader Backend is LIVE",
    time: new Date().toISOString()
  });
});

app.post("/test-binance", (req, res) => {
  res.json({
    success: true,
    message: "Binance connection endpoint reachable"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
