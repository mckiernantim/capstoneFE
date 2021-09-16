import { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signOut } from "../Services/Firebase";
// import axios from "axios";

export const Dashboard = () => {
  const history = useHistory();
  const user = useContext(UserContext);
  // const [linkedin, setLinkedin] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLinkedin(e.target.value);

  // axios.post(`https://secret-temple-11924.herokuapp.com`, {color: color, uid:user.uid})
  //   axios.post(`http://localhost:3001/users`, {
  //     linkedin: linkedin,
  //     uid: user.uid,
  //   });
  // };

  // const handleChange = (e) => {
  //   setLinkedin(e.target.value);
  // };

  // const getSingleUser = async () => {
  //   axios.get(`http://localhost:3001/users/${user.uid}`);
  // };
  // console.log(getSingleUser());

  // const deleteSingleUser = async () => {
  //   axios.delete(`http://localhost:3001/users/${user.uid}`);
  // };
  // console.log(deleteSingleUser());

  const handleLogout = async () => {
    signOut();
    alert("you've been logged out");
  };

  useEffect(() => {
    if (!user) {
      history.push("");
      // return <div>No User</div>;
    }
  }, [user, history]);

  if (!user) {
    return <div>No User</div>;
  }

  return (
    <section className="dashboard">
      <h1>Welcome {user.displayName}</h1>
      <div>
        <img src={user.photoURL} alt={user.displayName} />
      </div>
      <p> Email: {user.email}</p>
      <p>Phone: {user.phoneNumber ? user.phoneNumber : "no number found"}</p>
      <p>Linkedin: {user.linkedin ? user.linkedin : "no url found"}</p>
      <p>Twitter: {user.twitter ? user.twitter : "no handle found"}</p>
      <button onClick={handleLogout}> LOG OUT</button>
    </section>
  );
};
