import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";
import axios from "axios";

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

  // console.log("friendList: ", friendsList)

  // return (
  //   <ul>
  //     {friendsList ? (
  //       <>
  //         {friendsList.map((friend, idx) => {
  //           return (
  //             <Link key={idx} to={`/connections/${user.uid}`}>
  //               <li>
  //                 <p>{friend.display_name}</p>
  //               </li>
  //             </Link>
  //           );
  //         })}
  //       </>
  //     ) : (
  //       <>
  //         <h1>You have no connections</h1>
  //       </>
  //     )}
  //   </ul>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>LinkedIn</th>
            <th>Twitter</th>
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
    </>
  );
};

export default ConnectionsList;
