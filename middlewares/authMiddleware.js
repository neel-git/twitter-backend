const { verifyToken } = require("../utils/jwt");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ error: "Access denied" });
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send({ error: "Invalid token" });
  }
}

module.exports = authMiddleware;
