import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext()
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    // create User
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signIn user
    const singInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign IN google 

    const singInGoogle = ()=>{
        return signInWithPopup(auth,provider)
    }













    const authData = {
        createUser,
        singInUser,
        singInGoogle
    }




    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;