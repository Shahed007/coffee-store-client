import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import  auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  const profileUpdate = (name, photo) =>{
    setLoading(true);
  return  updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo,
    })
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
   return signOut(auth);
  }
 
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
        setLoading(false);
    })

    return ()=> {
      unSubscribe();
    }
  },[])

  const authData = {
    createUser,
    profileUpdate,
    signIn,
    signOutUser,
    user,
    loading
    
  }

  return (
    <AuthContext.Provider value={authData}>
     {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, 
}
export default AuthProvider