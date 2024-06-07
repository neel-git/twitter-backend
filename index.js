const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();
app.use(express.json());

//db connection
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
  });

const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
