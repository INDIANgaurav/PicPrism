const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../helpers/ARToken");

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "username already exist",
      });
    }
    const securePass = await bcrypt.hash(password, 10);
    user = new User({
      username,
      email,
      password: securePass,
      accountType,
    });
    await user.save();
    console.log(user.name , user.email)
    return res.status(201).json({
      success: true,
      message: "user created successfully",

    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const comparedPassword = await bcrypt.compare(password, user.password);
    console.log("i m here in login controller", comparedPassword);
    if (!comparedPassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const data = {
      id: user._id,
      author: user.username,

      accountType: user.accountType,
    };

    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    return res.json({
      success: true,
      message: "Logged in successfully",
      accessToken,
      refreshToken,
      role: user.accountType,
      author: user.username,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { login, signup };
