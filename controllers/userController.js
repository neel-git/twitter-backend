const { findUserById } = require("../services/userService");

async function getUser(req, res) {
  try {
    const user = await findUserById(req.params.userId);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getUser,
};
