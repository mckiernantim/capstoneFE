import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signOut } from "../Services/Firebase";
import axios from "axios";


export const Dashboard = () => {
  let history = useHistory();
  const user = useContext(UserContext)
  
  const [color, setColor] =useState("")
  
  const handleSubmit = (e) => {
      e.preventDefault()
      setColor(e.target.value)

      // axios.post(`https://secret-temple-11924.herokuapp.com`, {color: color, uid:user.uid})
      axios.post(`http://localhost:3001/users`, {color: color, uid:user.uid})
  }

  const handleChange = (e) => {
      setColor(e.target.value)
  }

  const getSingleUser = async() => {
    axios.get(`http://localhost:3001/users/${user.uid}`);
  }
  // console.log(getSingleUser());

  const deleteSingleUser = async() => {
    axios.delete(`http://localhost:3001/users/${user.uid}`);
  }

  // console.log(deleteSingleUser());

  useEffect(() => { 
      if(!user){
          history.push("")
      }
  }, [user, history]);
  
  const handleLogout = async () => {
    signOut()
    alert("you've been logged out")
  };
  
  if (!user){
      return (<div>No User</div>)
  }
  
  return (
    <div>
      <h1> YOU ARE NOW LOGGED IN</h1>
      <h1>Welcome {user.display}!</h1>
      <h1> WE KNOW YOUR EMAIL : {user.email}  !</h1>
      <div>
        <img
          className="user-image"
          alt="its the users head"
          src={user.photoURL}
          ></img>
          <h1>WE KNOW WHAT YOU LOOK LIKE</h1>

          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">favorite color</label>
              <input type="text"  value={color} onChange={handleChange}/>
              <button type="submit">submit</button>

          </form>
      </div>

      <button onClick={handleLogout}> LOG OUT</button>
    </div>
  );
 
}