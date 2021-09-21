import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";

const API = apiURL();

const ConnectionsList = ({ uid }) => {
  const [friendsList, setFriendsList] = useState([]);

  const fetchList = async () => {
    try {
      let res = await axios.get(`${API}/users/${uid}/connections`);
    //   console.log(res.data);
      setFriendsList(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, [uid]);

  return (
    <div>
      {friendsList ? (
        <>
          <h1>CONNECTIONS</h1> <h1>{friendsList.display_name}</h1>
        </>
      ) : (
        <>
          <h1>You have no connections</h1>
        </>
      )}
    </div>
  );
};

export default ConnectionsList;
