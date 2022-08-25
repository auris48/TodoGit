class User {
  _id;
  _username;
  _password;
  _email;
  _todos;

  constructor(id, username, password, email, todos) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.todos=todos;
  }
  get username() {
    return this._username;
  }

  set username(username) {
    if (!username) {
      throw new Error("Username is required");
    }
    this._username = username;
  }
  get password() {
    return this._password;
  }
  set password(password) {
    if (!password) {
      throw new Error("Password is required");
    }
    this._password = password;
  }
  get email() {
    return this._email;
  }
  set email(email) {
    if (this.validateEmail(email)) {
      this._email = email;
    } else {
      throw new Error("Email is invalid");
    }
  }

  get todos() {
    return this._todos;
  }

  set todos(todos) {
    this._todos = todos;
  }

  set id(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
  validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
}

module.exports = User;