import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signInWithGoogle, signInWithGithub, signInWithEmailAndPassword} from "../Services/Firebase";
import { apiURL } from "../util/apiURL";
import "../Styles/Login.css"

const API = apiURL();

export const Login = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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

  const handleSignInGoogle = async () => {
    await signInWithGoogle();
  
  };
  const handleSignInGithub = async () => {
    await signInWithGithub();
  
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(email, password)
  }
  
  return (
    <section className="Login-msg">
      <h1>Welcome the Connect App!</h1>

      <div className="login-container">
        <div onClick={handleSignInGoogle} className="login" >
          <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
          <div >Continue with Google</div>
        </div>

        <div onClick={handleSignInGithub} className="login">
          <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <div >Continue with Github</div>
        </div>
      </div>


      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          name="email" 
          onChange={(e)=> setEmail(e.target.value)}
          value={email}/>

        <label htmlFor="password">Password</label>
        <input 
          type="password"
          name="password"
          onChange={(e)=> setPassword(e.target.value)}
          value={password} />

          <button type="submit">
            Submit
          </button>
      </form>
    <Link to = "/signup">
      <button>Sign Up</button>
    </Link>
    </section>
  );
};
