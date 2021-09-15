import axios from "axios";
import React, { useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle, signOut } from "../Services/Firebase";
import { apiURL } from "../util/apiURL";

const API = apiURL()

export const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory();
  useEffect(() => {
    if(user){
        console.log("%%%%%%%%"+ user.displayName);

          history.push("dashboard")
      }
  }, [user, history]);

const handleSignIn = async () =>{
    signInWithGoogle()
    console.log("&&&&&&&" + addNewUser(user))
}

const handleSignOut = async () =>{
    signOut()
}

const addNewUser = async (user) => {
  try {
    await axios.post(`${API}/users`, user)
  } catch (error) {
    console.log( error)
  }
}

 return (
    <div>
      <h1>Sign in with google!</h1>
      <button onClick={handleSignIn}>
        <span> Continue with Google</span>
    </button>

    <button onClick={handleSignOut}>Log out</button>
    </div>
  );
}