
// import React from "react";
// import {   Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const AuthWrapper=({children})=>{
//     const autStatus=useSelector(store=>store.authReducer.auth)
  
//     if(autStatus){
//         return children
// //   return <Navigate to='/login' state={{from:'/cart'}} replace={true}/>;
//   }
//   return <Navigate to='/login'/>;
//     console.log(autStatus)
//     return(
//      <div>{children}</div>
//     )
// }
// export default AuthWrapper


import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate,useLocation } from 'react-router-dom';

const RequiredAuth = ({children}) => {
    
   
    const {isAuth} = useSelector((state)=>state.auth);
    
    const location = useLocation ();
    const from = {
        pathname:location.pathname,
    }
    console.log("from",from)
   if(isAuth) return children;
   return <Navigate to ={"/login"} state={from} replace/>

}

export default RequiredAuth ;