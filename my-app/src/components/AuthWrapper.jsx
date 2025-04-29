import React from 'react'
import { useAuth } from '../AuthProvider'

export const AuthWrapper = ({ children }) => {

   const {currentUser} = useAuth();


  return currentUser? children: null;
}
