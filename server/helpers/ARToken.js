const jwt = require("jsonwebtoken");
const generateAccessToken = (data) => {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
const generateRefreshToken = (data) => {
  return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
module.exports = {generateAccessToken , generateRefreshToken}