const db = require("../db/dbConfig");

// INDEX
const getUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return {success: true, payload: users};
  } catch (error) {
   return { success: false, payload: error}
  }
};

// QUERY FOR POST ROUTE
const addUser = async (user) => {
  const { linkedin, twitter, uid } = user;
  try {
    const user = await db.one(
      "INSERT INTO users ( linkedin, twitter, uid ) VALUES ($1, $2, $3) RETURNING *",
      [linkedin, twitter, uid]
    );
    return {success: true, payload:user};
  } catch (error) {
   return { success: false, payload: error }
  }
};

// SHOW
const getUserById = async (uid) => {
  try {
    const userById = await db.one("SELECT * FROM users WHERE uid = $1", uid);
    return {success: true, payload: userById};
  } catch (error) {
   return { success: false, payload: "not found" }
  }
};

// UPDATE
const updateUserById = async (uid, body) => {
  const { linkedin, twitter } = body;
  try {
    const updateUser = await db.one("UPDATE users SET linkedin=$1, twitter=$2 WHERE uid = $3 RETURNING *", [linkedin, twitter,  uid]);
    return {success: true, payload: updateUser};
  } catch (error) {
   return { success: false, payload: error}
  }
};

// DELETE
const deleteUser = async (uid) => {
  try {
    const deletedUser = await db.one("DELETE FROM users WHERE uid = $1 RETURNING *", uid);
    return {success: true, payload: deletedUser};
  } catch (error) {
    console.log(error)
   return { success: false, payload: error}
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUserById
};
