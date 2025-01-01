import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Password } from "@mui/icons-material";
import axios from "axios";

// Validation schema
const SignUpchema = yup.object({
  email: yup.string().required('First name is required'),
  Password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      Password: "",
    },
    resolver: yupResolver(SignUpchema),
  });
 
 const Singinhandler=(data)=>{

const resp =axios.post("https://api.escuelajs.co/api/v1/auth/login",data)
console.log(resp,"resp");

 } 
  
  return (
    <>
      <Box className="container mt-5">
        <Box className="d-flex justify-content-around align-items-center flex-wrap mt-5">
          <Box>
          
          </Box>
          <form onSubmit={handleSubmit((data) => Singinhandler(data))}>
            <Box>
              <Typography variant="h5" className="text-start">
                Sign in to FreshCart
              </Typography>
              <Typography variant="body2">
                Welcome back to FreshCart! Enter your email to get started.
              </Typography>

              <Box>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      error={!!errors.firstName}
                      {...field}
                      size="small"
                      className="my-2"
                      fullWidth
                      type="text"
                      placeholder="E mail"
                    />
                  )}
                />
                <Typography className="text-danger text-start">{errors?.firstName?.message}</Typography>

                <Controller
                  name="Password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      error={!!errors.Password}
                      {...field}
                      size="small"
                      className="my-2"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Typography className="text-danger text-start">{errors?.Password?.message}</Typography>

                <Box>
                  <Button type="submit" size="small" fullWidth variant="contained">Sign In</Button>
                </Box>
              </Box>
              <Typography className="mt-3 text-start" variant="body2">
                Don’t have an account? <Link to="/sign-up"> Sign Up</Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;