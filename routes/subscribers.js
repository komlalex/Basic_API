const express = require("express");
const router = express.Router();
const {getOne, getAll, createOne, updateOne, deleteOne} = require("../controllers/subscribers");

const getById = require("../middlewares/subscribers")

// Get all subscribers
router.get("/", getAll);

// Get one subscriber
router.get("/:id",getById, getOne);

// Create one
router.post("/", createOne);

// Update one
router.patch("/:id", getById, updateOne);

// Delete one
router.delete("/:id", getById, deleteOne);

module.exports = router;