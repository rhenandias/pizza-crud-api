const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: '.env' });

requireDir("./src/models");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", require("./src/routes"));

let mongoUrl = process.env.MONGO_URL;
mongoose.connect(
  mongoUrl.toString(),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port);
