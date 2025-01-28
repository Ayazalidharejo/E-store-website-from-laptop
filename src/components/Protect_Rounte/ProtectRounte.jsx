import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ProtectRounte = ({children}) => {
  const [token ,settoken]=useState("")
  useEffect(()=>{

    const token =localStorage.getItem("token");
    
    settoken(token)
  },[])
  if (token) {
    return <>{children} </>
  }else{
return<div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='text-center'>
        <h1 className="mb-4">You must sign in to access This Page</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <ArrowRightAltIcon className='fs-1' />
          <Link to="sign-in">
            <button className='border-0 bg-success text-white p-3 fs-4 rounded ms-3'>
              Sign in First
            </button>
          </Link>
        </div>
      </div>
    </div>
  }
 
}

export default ProtectRounte