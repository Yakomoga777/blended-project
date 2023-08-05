const controllerWrapper = require("../utils/controllerWrapper");
const { signupService } = require("../services/authServices");
const { loginService, logoutService } = require("../services/authServices");

const signup = controllerWrapper(async (req, res, next) => {
  const newUser = await signupService(req.body);

  res.status(201).json({ user: newUser });
});
const login = controllerWrapper(async (req, res, next) => {
  const token = await loginService(req.body);
  res.status(200).json({ token });
});

const logout = controllerWrapper(async (req, res, next) => {
  await logoutService(req.user._id);

  res.status(200).json({ message: "Successful logout" });
});

module.exports = {
  signup,
  login,
  logout,
};
