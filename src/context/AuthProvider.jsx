import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
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
 
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, user => {
        console.log(user);
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