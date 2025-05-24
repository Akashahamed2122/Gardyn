import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext()
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
     // userLoading

  const [loading,setLoading]=useState(true)

    // create User
    const createUser = (email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signIn user
    const singInUser = (email,password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    // sign IN google 

    const singInGoogle = ()=>{
      setLoading(true)
        return signInWithPopup(auth,provider)
    }

      // updat user

const updateUser = (profile) => {
		return updateProfile(auth.currentUser, profile)
	}
    

      // logout
  const logOut = () => {
    return signOut(auth);
  };


    // on auth state
      useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUsr) => {
      setUser(currentUsr);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  












    const authData = {
        createUser,
        singInUser,
        singInGoogle,
        user,
        setUser,
        logOut,
        updateUser,
        loading
    }




    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;