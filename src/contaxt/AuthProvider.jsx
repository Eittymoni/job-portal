import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.init';
import AuthContext from './AuthContaxt';
import { GoogleAuthProvider } from 'firebase/auth';



const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,SetLoading]=useState(true)

    const createUser = (email,password) =>{
        SetLoading(true);
        return  createUserWithEmailAndPassword(auth,email, password)
    }

  const signInUser =(email,password) =>{
    SetLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }  

const signInWithGoogle = ()=>{
  SetLoading(true)
  return signInWithPopup(auth,googleProvider)
}

const signOutUser = ()=>{
  SetLoading(true)
  return signOut(auth)
}

useEffect(() =>{
 const unsubscibe= onAuthStateChanged(auth, currentUser =>{

  setUser(currentUser)
  console.log("state current", currentUser)
  SetLoading(false)
 }) 
 
 return () =>{
unsubscibe()
 }
},[])

  const authInfo ={
  user,
  loading,
  createUser,
  signInUser,
  signOutUser,
  signInWithGoogle 
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

  );
}

export default AuthProvider;
