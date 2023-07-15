const { Router } = require("express");
const {
  getAllTasks,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControllers");

const validateBody = require("../utils/validateBody");

const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
} = require("../utils/validation/taskValidationSchemas");

const router = Router();

router
  .route("/")
  .get(getAllTasks)
  .post(validateBody(createTaskValidationSchema), createTask);
router
  .route("/:taskId")
  .get(getTasksById)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(deleteTask);

// router.get("/", getAllTasks);
// router.get("/:taskId", getTasksById);
// router.post("/", createTask);
// router.patch("/:taskId", updateTask);
// router.delete("/:taskId", deleteTask);

module.exports = {
  taskRouter: router,
};
