require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const PORT = 5000;
const app = express();

app.use(express.json());

app.use("/api/cards", require("./routes/Card"));

app.get("/ping", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});