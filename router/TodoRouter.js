const express = require("express");
const router = express.Router();
const Todo = require("../model/todo");

function isJsonData(request, response, next) {
  if (request.headers["content-type"] !== "application/json") {
    response.status(400).send("Bad request");
  }
  next();
}

router.get("/", async (request, response, next) => {
  response.json(await Todo.find());
});

router.post("/", async (request, response, next) => {
  try {
    const todo = new Todo(request.body);
    await todo.save();
    response.status(201).setHeader("Location", `/Todo/${todo.id}`).json(todo);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", isJsonData, async (request, response, next) => {
  const todo = await Todo.findById(request.params.id);
  if (todo) {
    response.status(200).json(todo);
  } else {
    next(new TodoNotFoundError(request.params.id));
  }
});

router.put("/:id", isJsonData, async (request, response, next) => {
  const todo = await Todo.updateOne({ _id: request.params.id }, request.body);
  if (todo) {
    response.status(200).json(todo);
  } else {
    next(new TodoNotFoundError(request.params.id));
  }
});

//request code later
router.delete("/:id", async (request, response, next) => {
  const todo = await Todo.findByIdAndDelete({ _id: request.params.id });
  if (todo) {
    response.status(200).json(todo);
  } else {
    next(new TodoNotFoundError(request.params.id));
  }
});

module.exports = router;
//http later code
// const express = require("express");
