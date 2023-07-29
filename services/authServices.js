const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { HttpError } = require("../utils/HttpError");

const signupService = async (body) => {
  const user = await User.findOne({ email: body.email });

  if (user) {
    throw new HttpError(409, "User is alredy exist");
  }
  const hashPassword = await bcrypt.hash(body.password, 12);

  const newUser = await User.create({
    username: body.username,
    email: body.email,
    password: hashPassword,
  });

  return newUser;
};

const loginService = async (body) => {
  const user = await User.findOne({ email: body.email });

  if (!user) {
    throw new HttpError(401, "Password or email wrong");
  }
  const isPasswordCorrect = await bcrypt.compare(body.password, user.password);

  if (!isPasswordCorrect) {
    throw new HttpError(401, "Password or email wrong");
  }
};

const logoutService = () => {};

module.exports = {
  signupService,
  loginService,
  logoutService,
};
