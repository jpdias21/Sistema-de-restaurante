import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps{
    children : JSX.Element
}

function ProtectedRoute({children} : ProtectedRoutesProps){
    
  
    const token = localStorage.getItem('token')

    if(!token){
        return <Navigate to="/Login" />
    }
    return children
}

export default ProtectedRoute