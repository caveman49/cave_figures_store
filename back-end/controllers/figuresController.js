const express = require("express");
const figures = express.Router();

const {
  getAllFigures,
  getFigure,
  addNewFigure,
  deleteFigure,
  updateFigure,
} = require("../queries/figures");

// All Figures
figures.get("/", async (_, response) => {
  console.log("GET request to /figures");
  const allFigures = await getAllFigures();
  if (allFigures.length === 0) {
    response.status(500).json({ error: "server error" });
    return;
  }
  response.status(200).json(allFigures);
});

// Show Figure
figures.get("/:id", async (request, response) => {
  console.log("GET request to /figures/:id");
  const figure = await getFigure(request.params.id);
  if (figure.id) {
    response.status(200).json(figure);
  } else {
    response.status(404).json("Figure does not exist");
  }
});

// Create Figure
figures.post("/", async (request, response) => {
  try {
    console.log("POST request to /figures");
    const newFigure = await addNewFigure(request.body);
    response.json(newFigure);
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

// Delete Song
figures.delete("/:id", async (request, response) => {
  console.log("DELETE request to /figures/:id");
  const deletedFigure = await deleteFigure(request.params.body);
  if (deletedFigure.id) {
    response.status(200).json(deletedFigure);
  } else {
    response.status(404).json("Figure does not exist");
  }
});

// Update Figure
figures.put("/:id", async (request, response) => {
  console.log("UPDATE request to /figures/:id");
  const updatedFigure = await updateFigure(request.params.id, request.body);
  if (updatedFigure.id) {
    response.status(200).json(updatedFigure);
  } else {
    response.status(404).json("Snack does not exist");
  }
});

module.exports = figures;
