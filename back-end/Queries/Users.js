const db = require("../db/dbConfig");


// QUERY FOR POST ROUTE
const addSnack = async (users) => {
    const { name, fiber, protein, added_sugar, is_healthy, image } = users;
    try {
      const users = await db.one(
        "INSERT INTO snacks ( firstname, lastname, email, phone,fiber, protein, added_sugar, is_healthy, image ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [ capitalize(name), fiber, protein, added_sugar, is_healthy, image ]
      );
      return { success: true, payload: users };
    } catch (error) {
      return { success: false, payload: "must include required" };
    }
  };
