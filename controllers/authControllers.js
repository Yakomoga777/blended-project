const controllerWrapper = require("../utils/controllerWrapper");
const { signupService } = require("../services/authServices");

const signup = controllerWrapper(async (req, res, next) => {
  const newUser = await signupService(req.body);

  res.status(201).json({ user: newUser });
});
const login = controllerWrapper(async (req, res, next) => {});

const logout = controllerWrapper(async (req, res, next) => {});

module.exports = {
  signup,
  login,
  logout,
};
