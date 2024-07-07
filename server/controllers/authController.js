const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;
   

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    user = new User({
      username,
      email,
      password: hashPassword,
      accountType,
    });
    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error in signup request",
    });
  }
};

const login = async (req, res) => {};

module.exports = { login, signup };
