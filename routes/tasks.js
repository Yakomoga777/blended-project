const { Router } = require("express");
const {
  getAllTasks,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControllers");

const router = Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:taskId").get(getTasksById).patch(updateTask).delete(deleteTask);

// router.get("/", getAllTasks);
// router.get("/:taskId", getTasksById);
// router.post("/", createTask);
// router.patch("/:taskId", updateTask);
// router.delete("/:taskId", deleteTask);

module.exports = {
  taskRouter: router,
};
