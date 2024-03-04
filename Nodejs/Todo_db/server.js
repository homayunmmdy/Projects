const express = require("express");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const Todo = require("./model/todoModel");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/todos", async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(todo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

app.delete("/todos/:id", async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.json({message : "Todo deleted successfully"});
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
