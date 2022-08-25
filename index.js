const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();
const TodoRouter = require("./router/TodoRouter");
const UserRouter = require("./router/UserRouter");

app.use(express.json());
app.use("/Todo", TodoRouter);
app.use("/User", UserRouter);

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
