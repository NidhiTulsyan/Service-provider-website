import React, { useState } from "react";
import { TextField, Button, Typography, Box, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Email from "@mui/icons-material/Email";
import Lock from "@mui/icons-material/Lock";
import { getuserlogin, getUserRegister } from "../Api-Helper-Axios/ApiHelper";
import { useNavigate } from "react-router-dom";

const UserLoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to Login mode
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      getuserlogin(formData)
        .then((data) => {
          alert("Login Successfull");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getUserRegister(formData)
        .then((data) => {
          alert("signup Successfull...now log in");
          setFormData({ name: "", email: "", password: "" });
          setIsLogin(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(isLogin ? "Logging in..." : "Registering...", formData);
  };

  return (
    <Box
      sx={{
        width: 350,
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {isLogin ? "Login" : "Register"}
      </Typography>

      <form onSubmit={handleSubmit}>
        {!isLogin && ( // Show Name field only in Register mode
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <IconButton disabled>
              <AccountCircle />
            </IconButton>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <IconButton disabled>
            <Email />
          </IconButton>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <IconButton disabled>
            <Lock />
          </IconButton>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          {isLogin ? "Login" : "Register"}
        </Button>
      </form>

      <Typography
        variant="body2"
        sx={{ cursor: "pointer", color: "blue" }}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </Typography>
    </Box>
  );
};

export default UserLoginRegister;
