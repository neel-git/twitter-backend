const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

function generateToken(user) {
  return jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "1h" });
}

function verifyToken(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = {
  generateToken,
  verifyToken,
};
