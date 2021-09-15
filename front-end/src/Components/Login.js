import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle, signOut } from "../Services/Firebase";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export const Login = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  const addNewUser = async (user) => {
    const { uid, displayName, linkedin, twitter, email, photoURL, phoneNumber } = user;
    try {
      await axios.post(`${API}/users`, {
        uid: uid,
        displayName: displayName,
        linkedin: linkedin,
        twitter: twitter,
        email: email,
        photoURL: photoURL,
        phoneNumber: phoneNumber,
      });
    } catch (error) {
      return error;
    }
  };

  const handleSignIn = async () => {
    await signInWithGoogle();
    // console.log(user);
    // console.log("this is user");
    // addNewUser(user)
    // console.log("help" + user);
  };

  // const handleSignOut = async () => {
  //   signOut();
  // };

  useEffect(() => {
    if (user) {
      addNewUser(user);
      history.push("dashboard");
    }
  }, [user, history]);

  return (
    <section>
      <h1>Welcome the Connect App!</h1>
      <button onClick={handleSignIn}>
        Sign in with Google
      </button>
    </section>
  );
};
