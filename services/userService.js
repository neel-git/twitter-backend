const User = require("../models/User");

async function findUserById(userId) {
  return await User.findById(userId);
}

module.exports = {
  findUserById,
};
