const { registerUser, loginUser } = require("../services/authService");

async function register(req, res) {
  try {
    const token = await registerUser(req.body.username, req.body.password);
    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const token = await loginUser(req.body.username, req.body.password);
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = {
  register,
  login,
};
