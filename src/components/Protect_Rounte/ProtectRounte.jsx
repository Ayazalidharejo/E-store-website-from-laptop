import React, { useEffect, useState } from 'react'

const ProtectRounte = ({children}) => {
  const [token ,settoken]=useState("")
  useEffect(()=>{

    const token =localStorage.getItem("token");
    
    settoken(token)
  },[])
  if (token) {
    return <>{children} </>
  }else{
return<h1>you don't have accese </h1>
  }
 
}

export default ProtectRounte