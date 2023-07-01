const path = require("path");
const fs = require("fs/promises");
const { HttpError } = require("../utils/HttpError");
const crypto = require("crypto");
const { writeFile } = require("fs");

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
  return task;
};
const createTaskService = async (body) => {
  const allTasks = await getAllTasksService();
  const newTask = {
    id: crypto.randomUUID(),
    ...body,
  };
  allTasks.push(newTask);
  await fs.writeFile(taskPath, JSON.stringify(allTasks, null, 2));
  return newTask;
};
const updateTaskService = async (taskId, body) => {
  const allTasks = await getAllTasksService();
  const index = allTasks.findIndex((task) => task.id === taskId);
  if (index === -1) {
    throw new HttpError(404, "task not found!");
  }
  allTasks[index] = {
    ...allTasks[index],
    ...body,
  };
  await fs.writeFile(taskPath, JSON.stringify(allTasks, null, 2));
  return allTasks[index];
};
const deleteTaskService = async (taskId) => {
  const allTasks = await getAllTasksService();
  const index = allTasks.findIndex((task) => task.id === taskId);
  if (index === -1) {
    throw new HttpError(404, "task not found!");
  }
  allTasks.splice(index, 1);
  await fs.writeFile(taskPath, JSON.stringify(allTasks, null, 2));
  return taskId;
};

module.exports = {
  getAllTasksService,
  getTasksByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
