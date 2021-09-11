const db = require("../db/dbConfig");

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

// const getUserById = async (id) => {
//   try {
//     const userById = await db.one("SELECT * FROM users WHERE id = $1", id);
//     return userById;
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  addUser,
  getUsers
  // getUserById
};
