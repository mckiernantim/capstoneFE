import React from "react";
import {useState, useEffect} from 'react'
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL()

const ConnectionsList = ({uid}) =>{
    const [friendsList, setFriendsList] = useState ([])

    const fetchList = async () => {
        try {
            let res = await axios.get(`${API}/users/${uid}/connections`)
            console.log(res)
            setFriendsList(res.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchList()
    }, [uid])

    return(
    <div>
        <h1>CONNECTIONS</h1>
        <h1>{friendsList.display_name}</h1>


        
    </div>
    )
}

export default ConnectionsList;