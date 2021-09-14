import React, {useContext} from 'react'
import { Login } from '../Components/Login'
import { UserContext } from '../Providers/UserProvider'

export const LoginPage = () => {
    return (
        <div>     
           <Login /> 
        </div>
    )
}