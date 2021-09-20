// Backend Authentication - Prevent unwanted behavior
// auth.js - add to protected route to prevent users from accessing users index
// firebase.js - add private key variables
// .env - add private keys
// frontend/UsersIndex.js - add token to fetchUsers
// routes/users.js - add middleware (checkFirebaseToken) to user index

// prevent user from accessing the backend via web browser
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  module.exports = admin;
