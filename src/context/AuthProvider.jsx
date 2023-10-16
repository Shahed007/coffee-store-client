import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, updateProfile, onAuthStateChanged} from "firebase/auth";
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