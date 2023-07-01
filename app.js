const express = require("express");

const { taskRouter } = require("./routes/tasks");

const app = express();

app.use("/tasks", taskRouter);

module.exports = {
  app,
};
