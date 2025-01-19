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
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

// Validation schema
const SignUpchema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SignUpchema),
  });

  const signInHandler = async (data) => {
    try {
      const formattedData = {
        email: data.email,
        password: data.password,
      };

      // Make an API call to sign in
      const resp = await axios.post("https://api.escuelajs.co/api/v1/auth/login", formattedData);

      const accessToken = resp.data.access_token;

      if (accessToken) {
        localStorage.setItem("token", accessToken); // Save token to localStorage
        navigate("/"); // Redirect to the homepage
      } else {
        alert("You don't have access");
      }
    } catch (error) {
      console.error(
        error.response ? error.response.data : error.message,
        "Error"
      );
    }
  };

  return (
    <Box className="container mt-5">
      <Box className="d-flex justify-content-around align-items-center flex-wrap mt-5">
        <form onSubmit={handleSubmit(signInHandler)}>
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
                    error={!!errors.email}
                    {...field}
                    size="small"
                    className="my-2"
                    fullWidth
                    type="text"
                    placeholder="Email"
                  />
                )}
              />
              <Typography className="text-danger text-start">
                {errors?.email?.message}
              </Typography>

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    error={!!errors.password}
                    {...field}
                    size="small"
                    className="my-2"
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ cursor: "pointer" }}
                        >
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Typography className="text-danger text-start">
                {errors?.password?.message}
              </Typography>

              <Box>
                <Button type="submit" size="small" fullWidth variant="contained">
                  Sign In
                </Button>
              </Box>
            </Box>
            <Typography className="mt-3 text-start" variant="body2">
              Don’t have an account? <Link to="/sign-up"> Sign Up</Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
