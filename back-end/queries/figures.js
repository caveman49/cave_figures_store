const database = require("../db/dbConfig.js");

const getAllFigures = async () => {
  try {
    const allFigures = await database.any("SELECT * FROM figures");
    return allFigures;
  } catch (error) {
    return error;
  }
};

const getFigure = async (id) => {
  try {
    const theFigure = await database.one(
      "SELECT * FROM figures WHERE id=$1",
      id
    );
    return theFigure;
  } catch (error) {
    return error;
  }
};

const addNewFigure = async (figure) => {
  const { name, description, price, rating, is_featured } = figure;
  const newFigure = await database.any(
    "INSERT INTO figures (name, description, price, rating, is_featured) VALUES ($1, $2, $3, $4, $5) RETURNING *"[
      (name, description, price, rating, is_featured)
    ]
  );
  return newFigure;
};

const deleteFigure = async (id) => {
  try {
    const deletedFigure = await database.one(
      "DELETE FROM figures WERE id=$1 RETURNING *",
      id
    );
    return deletedFigure;
  } catch (error) {
    return error;
  }
};

const updateFigure = async (id, figure) => {
  try {
    const { name, description, price, rating, is_featured } = figure;
    const updatedFigure = await database.one(
      "UPDATE figures SET name=$2, description=$3, price=$4, rating=$5, is_featured=$6 WHERE id=$1 RETURNING *",
      [name, description, price, rating, is_featured, id]
    );
    return updatedFigure;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllFigures,
  getFigure,
  addNewFigure,
  deleteFigure,
  updateFigure,
};
