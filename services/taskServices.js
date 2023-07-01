const path = require("path");
const fs = require("fs/promises");
const { HttpError } = require("../utils/HttpError");

const taskPath = path.join(__dirname, "..", "db", "tasks.json");

const getAllTasksService = async () => {
  const result = await fs.readFile(taskPath, "utf-8");
  return JSON.parse(result);
};
const getTasksByIdService = async (id) => {
  const allTasks = await getAllTasksService();
  const task = allTasks.find((task) => task.id === id);
  if (!task) {
    throw new HttpError(404, "task not found!");
  }
};
const createTaskService = async () => {};
const updateTaskService = async () => {};
const deleteTaskService = async () => {};

module.exports = {
  getAllTasksService,
  getTasksByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
