import React, { useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle, signOut } from "../Services/Firebase";

export const Login = () => {
  const user = useContext(UserContext)
  const history = useHistory();
  useEffect(() => {
      if(user){
          history.push("dashboard")
      }
  }, [user, history]);

const handleSignIn = async () =>{
    signInWithGoogle()
}

const handleSignOut = async () =>{
    signOut()
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