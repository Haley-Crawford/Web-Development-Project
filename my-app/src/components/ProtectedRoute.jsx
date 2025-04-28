import React, { use } from "react";
import { useAuth } from '../../../AuthProvider'

export function ProtectedRoute({ children }){

    const { currentUser } = useAuth();

    if(!currentUser){
        return <Navigate to="/" />;
    }else {
        return children;
    }

};