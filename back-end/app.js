const express = require("express");
const app = express();
const cors = require("cors");
const figuresController = require("./controllers/figuresController");
const figures = require("./controllers/figuresController");

app.use(cors());
app.use(express.json());

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.send("Welcome to figures backend...");
});

app.use("/figures", figuresController);

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
