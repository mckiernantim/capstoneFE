import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { Link } from "react-router-dom";

const API = apiURL();

const ConnectionsList = () => {
  const [friendsList, setFriendsList] = useState([]);
  const user = useContext(UserContext);

  const fetchList = async () => {
    try {
      const res = await axios.get(`${API}/users/${user.uid}/connections`);
      console.log("connectionsList: ", user);
      setFriendsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, [user]);

  // console.log(friendsList)

  return (
    <ul>
      {friendsList ? (
        <>
          {friendsList.map((friend, idx) => {
            return(
              <Link key={idx} to={`/connections/${user.uid}`}>
                <li>
                {friend.display_name}
            </li>
                </Link>
            )
          })}
        </>
      ) : (
        <>
          <h1>You have no connections</h1>
        </>
      )}
    </ul>
  );
};

export default ConnectionsList;
