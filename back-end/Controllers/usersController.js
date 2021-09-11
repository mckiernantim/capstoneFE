const express = require("express");
const users = express.Router();
const { addUser, getUsers } = require("../Queries/Users");

users.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

users.post("/", async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
});

users.get("/:id", async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = users;
