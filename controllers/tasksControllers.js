const {
  getAllTasksService,
  getTasksByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/taskServices");

const getAllTasks = async (req, res, next) => {
  const tasks = await getAllTasksService();
  res.status(200).json(tasks);
};
const getTasksById = async (req, res, next) => {};
const createTask = async (req, res, next) => {};
const updateTask = async (req, res, next) => {};
const deleteTask = async (req, res, next) => {};

module.exports = {
  getAllTasks,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
};
