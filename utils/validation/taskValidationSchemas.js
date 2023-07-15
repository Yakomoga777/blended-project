const Joi = require("joi");

const createTaskValidationSchema = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean().optional(),
});

const updateTaskValidationSchema = Joi.object()
  .keys({
    title: createTaskValidationSchema.extract("title").optional(),
    completed: createTaskValidationSchema.extract("completed").optional(),
  })
  .or("title", "completed");

module.exports = {
  createTaskValidationSchema,
  updateTaskValidationSchema,
};
