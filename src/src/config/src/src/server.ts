import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Smart Trader Backend is running 🚀",
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ healthy: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
