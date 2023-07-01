const express = require("express");

const { taskRouter } = require("./routes/tasks");
const { globalErrorHandler } = require("./middlewares/globalErrorHandler");

const app = express();
app.use(express.json());

app.use("/tasks", taskRouter);

app.use(globalErrorHandler);

module.exports = {
  app,
};
