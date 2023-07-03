import React from 'react'

import { useLocation, Navigate } from "react-router-dom";



export const ProtectRoute = ({children}:any) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')

      
    if(!isAuthenticated || isAuthenticated == undefined){
        return (
            <Navigate to="/" state={{from:location} }/>
        )
    }
    return children
}