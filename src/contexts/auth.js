import React, { createContext, useCallback, useState } from 'react';
import { node } from 'prop-types'
import firebase from 'services/firebase';

const AuthContext = createContext();

function AuthProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    name: '',
    email: '',
    photo: '',
  });

  const login = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  return (
    <AuthContext.Provider value={{
      login,
      userInfo,
      setUserInfo,
    }}>
      {children}
    </AuthContext.Provider>
  );
} 

AuthProvider.propTypes = {
  children: node.isRequired,
}

export { AuthProvider, AuthContext };
