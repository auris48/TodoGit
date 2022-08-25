const express = require("express");
const router = express.Router();
const User = require("../model/User");
const TodoRouter = require("./TodoRouter");
const UserDatabase = require("../repository/UserDatabase");
const usersDatabase = new UserDatabase();

router.get("/", (request, response) => {
  response.json(usersDatabase);
});

router.post("/", (request, response) => {
  const data = request.body;
  const user = usersDatabase.addUser(data.name, data.password, data.email);
  const todos = data.todos.map((todo) => { todo.user=user});
  todos = todos.map((todo) => { TodoRouter.todoDatabase.addTodo(todo)});
  user.todos = todos;
  console.log(user);
  response.status(201).json(user);
});

router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const todo = todosDatabase.find((t) => t.id === id);
  if (todo) {
    response.status(200).json(todo);
  } else {
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
  } else {
    response.status(404).send("Todo not found");
  }
});

router.delete("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const todoIndex = todosDatabase.findIndex((t) => t.id === id);
  if (todoIndex === -1) {
    response.status(404).send("Todo not found");
  } else {
    todosDatabase.splice(todoIndex, 1);
    response.sendStatus(200);
  }
});

module.exports = router;
