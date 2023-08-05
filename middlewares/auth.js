const jwt = require("jsonwebtoken");
const { HttpError } = require("../utils/HttpError");
const User = require("../models/User");
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;
const { genereteTokens } = require("../utils/generateTokens");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [type, token] = authorization.split(" ");

  if (type !== "Bearer" || !token) {
    return next(new HttpError(401, "Not authorized"));
  }
  const payload = jwt.decode(token);
  let fetchedUser;
  try {
    fetchedUser = await User.findById(payload.id);

    if (!fetchedUser || !fetchedUser.refresh_token) {
      return next(new HttpError(401, "User not found or not authorized"));
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET);

    req.user = fetchedUser;

    next();
  } catch (error) {
    if (error.name !== "TokenExpiredError") {
      return next(new HttpError(401, "Invalid token"));
    }
    try {
      jwt.verify(fetchedUser.refresh_token, REFRESH_TOKEN_SECRET);
      const { accessToken, refreshToken } = genereteTokens(fetchedUser);
      await User.findByIdAndUpdate(fetchedUser._id, {
        refresh_token: refreshToken,
      });

      return res.status(200).json({
        accessToken,
      });
    } catch (error) {
      return next(
        new HttpError(401, "Refresh token is expired, please login again")
      );
    }
  }
};

module.exports = { auth };
