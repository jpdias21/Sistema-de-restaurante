import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface ProtectedRoutesProps{
    children : JSX.Element
}

function ProtectedRoute({children} : ProtectedRoutesProps){
  
    const token = localStorage.getItem('token')


    if(!token){
  

        return <Navigate to="/Login" />
    }


    if(token.split('.').length !== 3){
        localStorage.removeItem('token')
        return <Navigate to="/Login" />
    }



    const decoded: any = jwtDecode(token)
    if (decoded.exp < Date.now() / 86400) {
 
        return <Navigate to="/Login" />
    }


    return children
}

export default ProtectedRoute