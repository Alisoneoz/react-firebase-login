import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebaseConfig'
 
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context) throw new Error('❌There is not auth provider')
  return context;
}

export function AuthProvider ({ children }) {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  return(
    <authContext.Provider value={{ signUp, logIn }}>
      {children}
    </authContext.Provider>
  )
}
