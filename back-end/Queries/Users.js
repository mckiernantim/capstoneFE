const db = require("../db/dbConfig");


// QUERY FOR POST ROUTE
const addUser = async (user) => {
    const { color, uid } = user;
    try {
      const user = await db.one(
        "INSERT INTO users ( color, uid ) VALUES ($1, $2) RETURNING *",
        [ color, uid ]
      );
    //   return { success: true, payload: user };
      return user;
    } catch (error) {
    //   return { success: false, payload: "must include required" };
      console.log(error);
    }
  };

  module.exports = {
      addUser
  }
