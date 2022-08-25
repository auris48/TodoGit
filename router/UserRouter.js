const express = require("express");
const router = express.Router();
const Todo = require("../model/todo");

const todosDatabase = [];
let idCounter = 1;

router.get("/", (request, response) => {
  response.json(todosDatabase);
});

router.post("/", (request, response) => {
  const data = request.body;
  const todo = new Todo(
    idCounter++,
    data.name,
    data.description,
    data.priority,
    data.dueDate,
    data.status
  );

  console.log(todo);
  todosDatabase.push(todo);
  response.status(201).json(todo);
});

router.get("/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const todo = todosDatabase.find((t) => t.id === id);
    if (todo) {
        response.status(200).json(todo);
        }
    else {
        response.status(404).send("Todo not found");
    }
});

router.put("/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const updatedTodo = request.body;
    const todo = todosDatabase.find((t) => t.id === id);
    if (todo) {
        todo.name = updatedTodo.name || todo.name;
        todo.description = updatedTodo.description || todo.description;
        todo.priority = updatedTodo.priority || todo.priority;
        todo.dueDate = updatedTodo.dueDate || todo.dueDate;
        todo.status = updatedTodo.status || todo.status;
        response.status(200).json(todo);
    }
    else {
        response.status(404).send("Todo not found");
    }
});

router.delete("/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const todoIndex = todosDatabase.findIndex((t) => t.id === id);
    if (todoIndex === -1) {
        response.status(404).send("Todo not found");
    }
    else {
        todosDatabase.splice(todoIndex, 1);
        response.sendStatus(200);
    }
});

module.exports = router;