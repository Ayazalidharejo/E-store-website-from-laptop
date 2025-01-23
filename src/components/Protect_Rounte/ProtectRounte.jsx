import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProtectRounte = ({children}) => {
  const [token ,settoken]=useState("")
  useEffect(()=>{

    const token =localStorage.getItem("token");
    
    settoken(token)
  },[])
  if (token) {
    return <>{children} </>
  }else{
return<div className='d-flex align-items-center justify-content-center mt-5'>
<h1>you don't have accese  </h1>
<Link to="sign-in"> <button className='border-0 bg-success text-white'>  Signin First </button> </Link>
</div>
  }
 
}

export default ProtectRounte