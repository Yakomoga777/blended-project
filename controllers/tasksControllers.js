const {
  getAllTasksService,
  getTasksByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/taskServices");

const controllerWrapper = require("../utils/controllerWrapper");

const getAllTasks = controllerWrapper(async (req, res, next) => {
  const tasks = await getAllTasksService();
  res.status(200).json(tasks);
});

const getTasksById = controllerWrapper(async (req, res, next) => {
  const { taskId } = req.params;
  const task = await getTasksByIdService(taskId);
  res.status(200).json(task);
});

const createTask = controllerWrapper(async (req, res, next) => {
  const newTask = await createTaskService(req.body);
  res.status(201).json(newTask);
});

const updateTask = controllerWrapper(async (req, res, next) => {
  const { taskId } = req.params;
  const updatedTask = await updateTaskService(taskId, req.body);
  res.status(200).json(updatedTask);
});

const deleteTask = controllerWrapper(async (req, res, next) => {
  const { taskId } = req.params;
  const deletedTaskId = await deleteTaskService(taskId);
  res.status(200).json({ id: taskId });
});

// let deleteTask1 = async (req, res, next) => {
//   const { taskId } = req.params;
//   const deletedTaskId = await deleteTaskService(taskId);
//   res.status(200).json({ id: taskId });
// };
// deleteTask1 = controllerWrapper(deleteTask1);

module.exports = {
  getAllTasks,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
};
