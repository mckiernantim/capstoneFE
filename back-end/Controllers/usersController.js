const express = require("express");
const users = express.Router();
const { addUser, getUsers, getUserById, deleteUser, updateUserById } = require("../Queries/Users");

// INDEX
users.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

// CREATE
users.post("/", async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
});

// SHOW
users.get("/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// UPDATE
users.put("/:id", async (req, res) => {
  try {
    const user = await updateUserById(req.params.id, req.body)
    res.json(user)
  } catch (error) {
    console.log(error);
  }
})

// DELETE 
users.delete("/:id", async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
})

module.exports = users;