const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

async function registerUser(username, password) {
  const user = new User({ username, password });
  await user.save();
  return generateToken(user);
}

async function loginUser(username, password) {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return generateToken(user);
}

module.exports = {
  registerUser,
  loginUser,
};
