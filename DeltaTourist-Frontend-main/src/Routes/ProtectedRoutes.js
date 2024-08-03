import React from "react";
import { Outlet } from "react-router-dom";
import NotLoggedln from "../Components/NotLogginIn/NotLoggedIn";



const useAuth=()=>
{
    const loggedIn = localStorage.getItem('loggedIn') === 'true'; 
  return loggedIn;
}
const ProtectedRoutes=()=>
{
    const isAuth=useAuth()
    return isAuth? <Outlet/> :<NotLoggedln/>
}
export default ProtectedRoutes;