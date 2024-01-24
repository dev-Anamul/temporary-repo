const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

// GET all todos
router.get("/", todoController.getTodos);

// GET a single todo by ID
router.get("/:id", todoController.getTodo);

// POST a new todo
router.post("/", todoController.createTodo);

// PUT (update) an existing todo by ID
router.put("/:id", todoController.updateTodo);

// DELETE a todo by ID
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
