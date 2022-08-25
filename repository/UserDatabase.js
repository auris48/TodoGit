const User = require("../model/User");

class UserDatabase {
  _usersDatabase = [];
  _idCounter = 1;

  addUser(user) {
    this.usersDatabase.push(
      new User(this.idCounter++, user.name, user.password, user.email)
    );
    return this.usersDatabase[usersDatabase.length - 1];
  }

  getUsers() {
    return usersDatabase;
  }

  getUser(id) {
    return usersDatabase.find((t) => t.id === id);
  }

  updateUser(id, user) {
    const userIndex = usersDatabase.findIndex((t) => t.id === id);
    if (userIndex === -1) {
      return false;
    } else {
      usersDatabase[userIndex] = user;
      return true;
    }
  }

  deleteUser(id) {
    const userIndex = usersDatabase.findIndex((t) => t.id === id);
    if (userIndex === -1) {
      return false;
    } else {
      usersDatabase.splice(userIndex, 1);
      return true;
    }
  }

  get idCounter() {
    return this._idCounter;
  }

  set idCounter(value) {
    this._idCounter = value;
  }

  get usersDatabase() {
    return this._usersDatabase;
  }

  set usersDatabase(value) {
    this._usersDatabase = value;
  }
}

module.exports = UserDatabase;
