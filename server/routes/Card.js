const express = require("express");
const router = express.Router();
const Card = require("../model/Card");

router.post("/", async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { title, description } = req.body;
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).send({ message: "Card created successfully" });
  } catch (err) {
    console.error("Error creating card:", err);
    res.status(500).send({ message: "Error creating card" });
  }
});

router.get("/", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).send(cards);
  } catch (err) {
    console.error("Error fetching cards:", err);
    res.status(500).send({ message: "Error fetching cards" });
  }
});

router.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const cards = await Card.find({ title: title });
    if (cards.length === 0) {
      res.status(404).send({ message: "Card not found" });
    } else {
      res.status(200).send(cards);
    }
  } catch (err) {
    console.error("Error fetching card:", err);
    res.status(500).send({ message: "Error fetching card" });
  }
});

module.exports = router;
