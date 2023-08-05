const Joi = require("joi");

const { passwordPattern } = require("./const");

const signupValidationSchema = Joi.object({
  username: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordPattern).required().messages({
    "string.pattern.base":
      "Password should contain minimum eight characters, at least one letter and one number.",
  }),
});

const loginValidationSchema = Joi.object().keys({
  email: signupValidationSchema.extract("email"),
  password: signupValidationSchema.extract("password"),
});

module.exports = {
  signupValidationSchema,
  loginValidationSchema,
};
