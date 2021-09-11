const express = require("express");
const users = express.Router();
const { addUser } = require("../Queries/Users");

users.post("/", async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = users;