const {
  getAllTasksService,
  getTasksByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/taskServices");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};
const getTasksById = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await getTasksByIdService(taskId);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};
const createTask = async (req, res, next) => {
  try {
    const newTask = await createTaskService(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};
const updateTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const updatedTask = await updateTaskService(taskId, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const deletedTaskId = await deleteTaskService(taskId);
    res.status(200).json({ id: taskId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
};
