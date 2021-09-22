import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { Link } from "react-router-dom"

const API = apiURL();

const ConnectionsList = () => {
  const [friendsList, setFriendsList] = useState([]);
  const user = useContext(UserContext);

  const fetchList = async () => {
    try {
      const res = await axios.get(`${API}/users/${user.uid}/connections`);
      setFriendsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, [user]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>LinkedIn</th>
            <th>Twitter</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {friendsList ? (
            <>
              {friendsList.map((friend, idx) => {
                return (
                  <tr key={idx} to={`/connections/${user.uid}`}>
                    <td>{friend.display_name}</td>
                    <td>
                      <a href={friend.linkedin}>{friend.linkedin}</a>
                    </td>
                    <td><a href={`mailto:${friend.email}`}>{friend.email}</a></td>
                    <td><a href={friend.twitter}>{friend.twitter}</a></td>
                    <td><a href={`tel:${friend.phone_number}`}>{friend.phone_number}</a></td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              <h1>You have no connections</h1>
            </>
          )}
        </tbody>
      </table>
      <Link to="/dashboard">back</Link>
    </>
  );
};

export default ConnectionsList;
