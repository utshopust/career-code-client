import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebae.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, SetUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }

  // set observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      setLoading(false);
      console.log("user in the auth state change", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    signInUser,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
