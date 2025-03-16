import React, { useContext } from 'react'
import AuthContext from '../contaxt/AuthContaxt'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <span className="loading loading-spinner text-purple-400"></span>
    }
if(user){
    return children
}

  return <Navigate to="/signIn" state={location?.pathname}></Navigate>
}

export default PrivateRout
