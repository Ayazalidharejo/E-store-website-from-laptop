import { AccountCircle, Password } from '@mui/icons-material'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Signin = () => {
  const Signinschema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string(). min(8).max(20). required("Email is required"),
  })

  const [showpassword, setshowpassword] = useState(false)
  const { control, handleSubmit ,formState :{errors} } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(Signinschema),
  })
  return (
    <form onSubmit={handleSubmit((data) => {
      console.log(data);
    })}>
      <Box class="container mt-4" >
        <Box >
          <Box>
            <Typography className='text-center' variant='h5'>Sign in to FreshCart</Typography>
            <Typography className='text-center' variant='body1'>Welcome back to FreshCart! Enter your email to get started.</Typography>

          </Box>
          <Box>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (<TextField error={errors?.email? true : false}  {...field} size='small' fullWidth type='email' placeholder='E-mail' />)} />
              <Typography className='text-danger'>  {errors?.email?.message} </Typography>
              </Box>
          <Box> <Controller
            name="password"
            control={control}
            render={({ field }) => (<TextField  error={errors?.password? true : false} {...field} type={showpassword ? "text" : "password"} size='small' placeholder='Password' className='my-4' fullWidth slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start" onClick={() => setshowpassword(!showpassword)}>
                    {showpassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </InputAdornment >
                ),
              },

            }}
            />)} />  <Typography className='text-danger'>  {errors?.password?.message} </Typography> </Box>
          <Box> <Button type='submit' fullWidth variant='contained'> Sign in</Button></Box>


        </Box>
        <Typography className='mt-4 text-center'> Don’t have an account? <Link to="/signup">Sign Up</Link></Typography>
      </Box>
    </form>
  )
}

export default Signin