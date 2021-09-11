// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const usersController = require("./Controllers/usersController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.use("/users", usersController);

app.get("/", (req, res) => {
  res.send("Welcome to Connect App");
});

app.get("/*", (req, res) => {
  res.status(404).send("not found");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
