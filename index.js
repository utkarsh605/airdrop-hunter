const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Airdrop Hunter API running");
});

app.get("/airdrops", (req, res) => {
  const data = fs.readFileSync("./data/airdrops.json");
  res.json(JSON.parse(data));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
