import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { signUpWithEmailAndPassword } from "../Services/Firebase";
import { apiURL } from "../util/apiURL";


const SignUp =() => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUpWithEmailAndPassword(email, password)
        history.push(`/`)
    }

    return(
        <div>
            <h1>SIGNUP</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
            <input 
            type="email"
            name="email" 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}/>

            <label htmlFor="password">Password</label>
            <input 
            type="text"
            name="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password} />

            <button type="submit">
                Submit
            </button>
            </form>
        </div>
    )
}

export default SignUp;