const Todo = require("../model/Todo");

class TodoDatabase {
  _todosDatabase = [];
  _idCounter = 1;

  addTodo(todo) {
    this.todosDatabase.push(
      new Todo(
        this._idCounter++,
        todo.name,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.status,
        todo.user
      )
    );
  }

  getTodos() {
    return this.todosDatabase;
  }

  getTodo(id) {
    return this.todosDatabase.find((t) => t.id === id);
  }

  updateTodo(id, todo) {
    const todoIndex = this.todosDatabase.findIndex((t) => t.id === id);
    if (todoIndex === -1) {
      return false;
    } else {
      todosDatabase[todoIndex] = todo;
      return true;
    }
  }

  deleteTodo(id) {
    const todoIndex = this.todosDatabase.findIndex((t) => t.id === id);
    if (todoIndex === -1) {
      return false;
    } else {
      todosDatabase.splice(todoIndex, 1);
      return true;
    }
  }

  get idCounter() {
    return this._idCounter;
  }

  set idCounter(value) {
    this._idCounter = value;
  }

  get todosDatabase() {
    return this._todosDatabase;
  }

  set todosDatabase(value) {
    this._todosDatabase = value;
  }

}

module.exports = TodoDatabase;
