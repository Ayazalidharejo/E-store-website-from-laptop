
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Password } from '@mui/icons-material';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const Signup = () => {
    const SignUpschema = yup
    .object({
      firstName: yup.string().required( "First Name is required"),
      secondName: yup.string().required("Second Name is required"),
      email: yup.string().required(" Email  is required"),
      Password: yup.string().min(8).max(20).required("Password  is required"),
    })

    const [showpassword,setshowpassword]=useState (false)
    const { control, handleSubmit,formState:{errors} } = useForm({
        defaultValues: {
            firstName: "",
          secondName: "",
            email: "",
            Password: "",
        },
        resolver: yupResolver(SignUpschema),
    })
    return (
       <form onSubmit={handleSubmit((data)=>{console.log(data);
       })}>
        <Box class="container mt-4" >
            <Box >
                <Box>
                    <Typography className='text-center' variant='h5'>Get Start Shopping</Typography>
                    <Typography className='text-center' variant='body1'>Welcome to FreshCart! Enter your email to get started.</Typography>

                </Box>
                <Box>
                <Controller
        name="firstName"
        control={control}
        render={({ field }) =>(  
                     <TextField error={errors?.firstName?true:false } {...field} size='small' fullWidth type='text' placeholder='First Name' /> )}/> 
                     <Typography className='text-danger'> {errors?.firstName?.message}  </Typography>
                     </Box> 
                <Box className="my-4">  
         <Controller
        name="lastName"
        control={control}
        render={({ field }) =>(  
                     <TextField error={errors?.secondName?true:false } {...field} size='small' fullWidth type='text' placeholder='Second Name' /> )}/>
                      <Typography className='text-danger'> {errors?.secondName?.message}  </Typography>
                     </Box>
                <Box className="my-4">  
         <Controller
        name="email"
        control={control}
        render={({ field }) =>(  
                     <TextField error={errors?.email?true:false } {...field} size='small' fullWidth type='email' placeholder='Email' /> )}/>
                      <Typography className='text-danger'> {errors?.email?.message}  </Typography>
                     </Box>
                <Box> 
                    
         <Controller
        name="Password"
        control={control}
        render={({ field }) =>(  
                     <TextField error={errors?.Password?true:false } {...field} size='small' fullWidth  placeholder='password'  type={showpassword ? "text" :"password"} size='small' className='my-4' fullWidth slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="start"  onClick={()=>setshowpassword(!showpassword)} >
                               
                               {showpassword ? <VisibilityIcon  /> : <VisibilityOffIcon/>}
                            </InputAdornment>
                        ),
                    },
                }} /> )}/>
                 <Typography className='text-danger'> {errors?.Password?.message}  </Typography>
                 </Box>
                <Box> <Button type='submit' fullWidth variant='contained'> Register</Button></Box>


            </Box>

        </Box>
       </form>
    )
}

export default Signup