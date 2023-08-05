const { HttpError } = require("../utils/HttpError");
const { Task } = require("../models/Task");

const getAllTasksService = async (userID) => {
  return await Task.find({ owner: userID });
};
const getTasksByIdService = async (id) => {
  const task = await Task.findById(id);

  if (!task) {
    throw new HttpError(404, "task not found!");
  }
  return task;
};
const createTaskService = async (body, userId) => {
  return await Task.create({ ...body, owner: userId });
};
const updateTaskService = async (taskId, body) => {
  const updatedTask = await Task.findByIdAndUpdate(taskId, body, { new: true });

  if (!updatedTask) {
    throw new HttpError(404, "task not found!");
  }

  return updatedTask;
};
const deleteTaskService = async (taskId) => {
  const deteledTask = await Task.findByIdAndDelete(taskId);

  if (!deteledTask) {
    throw new HttpError(404, "task not found!");
  }

  return taskId;
};

module.exports = {
  getAllTasksService,
  getTasksByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
