import axios from "axios";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle } from "../Services/Firebase";
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
        display_name: displayName,
        linkedin: linkedin,
        twitter: twitter,
        email: email,
        photo_url: photoURL,
        phone_number: phoneNumber,
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
    <section className="Login-msg">
      <h1>Welcome the Connect App!</h1>
      <button onClick={handleSignIn}>
        Sign in with Google
      </button>
    </section>
  );
};
