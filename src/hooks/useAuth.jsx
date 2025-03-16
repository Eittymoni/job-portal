import React, { useContext } from 'react'
import AuthContext from '../contaxt/AuthContaxt'

const useAuth = () => {
    const context = useContext(AuthContext)
  return  context
}

export default useAuth
