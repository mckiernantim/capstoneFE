const db = require("../db/dbConfig");

// INDEX
const getUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (error) {
    console.log(error);
  }
};

// QUERY FOR POST ROUTE
const addUser = async (user) => {
  const { color, uid } = user;
  try {
    const user = await db.one(
      "INSERT INTO users ( color, uid ) VALUES ($1, $2) RETURNING *",
      [color, uid]
    );
    //   return { success: true, payload: user };
    return user;
  } catch (error) {
    //   return { success: false, payload: "must include required" };
    console.log(error);
  }
};

// SHOW
const getUserById = async (uid) => {
  try {
    const userById = await db.one("SELECT * FROM users WHERE uid = $1", uid);
    return userById;
  } catch (error) {
    console.log(error);
  }
};

// UPDATE
const updateUserById = async (uid, body) => {
  const { color } = body;
  try {
    const updateUser = await db.one("UPDATE users SET color=$1, uid=$2", [color, uid]);
    return updateUser;
  } catch (error) {
    console.log(error);
  }
};

// DELETE
const deleteUser = async (uid) => {
  try {
    const deletedUser = await db.one("DELETE * FROM users WHERE uid = $1", uid);
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUserById
};
