const { Router } = require("express");

const router = Router();

const { signup, login, logout } = require("../controllers/authControllers");
const validateBody = require("../utils/validateBody");
const {
  signupValidationSchema,
  loginValidationSchema,
} = require("../utils/validation/authValidationSchema");

const { auth } = require("../middlewares/auth");

router.post("/signup", validateBody(signupValidationSchema), signup);
router.post("/login", validateBody(loginValidationSchema), login);
router.post("/logout", auth, logout);

module.exports = {
  authRouter: router,
};
