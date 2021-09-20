// const admin = require("../firebase");

// // prevent users from accessing users index
// // add to protected route (ex. frontend/UsersIndex.js fetchAllUsers())
// const checkFirebaseToken = async (req, res, next) => {
//     try {
//         const token = req.headers.authtoken;
//         const decodedToken = await admin.auth().verifyIdToken(token);
//         const uid = decodedToken.uid;
//         req.user_id = uid;
//         next();
//     } catch (error) {
//         console.log("Code Broke! ", error);
//         res.status(401).json({message: "No Authenticated User"})
//     }
// }

// module.exports = {
//     checkFirebaseToken
// }