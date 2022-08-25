const express = require("express");
const router = express.Router();
const TodoDatabase = require("../repository/TodoDatabase");
const todoDatabase = new TodoDatabase();

router.get("/", (request, response) => {
  response.json(todoDatabase.getTodos());
});

router.post("/", (request, response) => {
  const todo = request.body;
  todoDatabase.addTodo(todo);
  response.status(201).json(todo);
});

router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const todo = todoDatabase.getTodo(id);
  if (todo) {
    response.status(200).json(todo);
  } else {
    response.status(404).send("Todo not found");
  }
});

router.put("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const todo = request.body;

  if (todoDatabase.updateTodo(id, todo)) {
    response.status(200).json(todo);
  } else {
    response.status(404).send("Todo not found");
  }
});

router.delete("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  if (todoDatabase.deleteTodo(id)) {
    response.status(204).send();
  } else {
    response.status(404).send("Todo not found");
  }
});

module.exports = router;
