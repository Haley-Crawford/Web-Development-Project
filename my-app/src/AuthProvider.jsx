
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase'; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log("User", user)
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}