import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      status: "ok",
      message: "Smart Trader Backend is running",
    })
  );
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
