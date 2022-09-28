import { useMemo } from "react";
import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

export const PrivateRoutes = ({children}) => {
  
    const {logged} = useContext(AuthContext);

    const {pathname, search} = useLocation();
    useMemo (() => localStorage.setItem('lastPath', pathname + search), [pathname, search]);
    
    return (logged)
        ? children
        : <Navigate to="/login" />
}