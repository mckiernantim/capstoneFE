import axios from "axios";
import React, { useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle, signOut } from "../Services/Firebase";
import { apiURL } from "../util/apiURL";

const API = apiURL()

export const Login = () => {
  const user = useContext(UserContext)

  // console.log("user" + user)
  const history = useHistory();

  useEffect(() => {
    if(user){
        // console.log("%%%%%%%%"+ user.displayName);
         addNewUser(user)

          history.push("dashboard")
      }
  }, [user, history]);

const handleSignIn = async () =>{
    await signInWithGoogle()
    console.log(user)
    console.log("this is user")
    // addNewUser(user)
    console.log("help"+user)

    // console.log("&&&&&&&" + addNewUser(user))
}

const handleSignOut = async () =>{
    signOut()
}


const addNewUser = async () => {
  try {
    await axios.post(`http://localhost:3001/users`, {uid:user.uid, displayName:user.displayName})
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