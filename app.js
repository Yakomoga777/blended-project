const express = require("express");

const { taskRouter } = require("./routes/tasks");
const { authRouter } = require("./routes/auth");
const { globalErrorHandler } = require("./middlewares/globalErrorHandler");
const { notFoundHandler } = require("./middlewares/notFoundHandler");

const app = express();
app.use(express.json());

app.use("/tasks", taskRouter);
app.use("/auth", authRouter);

app.use(notFoundHandler);

app.use(globalErrorHandler);

module.exports = {
  app,
};
