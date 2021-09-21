// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const usersController = require("./Controllers/usersController");
const connectionsController = require('./Controllers/connectionsController')
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.use("/users", usersController);
app.use('/connections', connectionsController);

app.get("/", (req, res) => {
  res.send("Welcome to Connect App");
});

app.get("/*", (req, res) => {
  res.status(404).send("not found");
});

// EXPORT
module.exports = app;
