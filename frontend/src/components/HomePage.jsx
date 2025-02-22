import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  TextField,
  MenuItem,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "./Navbar";
import Footer from "./Footer";

const categories = [
  {
    name: "House Cleaning",
    img: "https://template.binaryvines.com/servat/assets/images/resource/categori-1.png",
  },
  {
    name: "Electricity Service",
    img: "https://template.binaryvines.com/servat/assets/images/resource/categori-2.png",
  },
  {
    name: "Furniture Replace",
    img: "https://template.binaryvines.com/servat/assets/images/resource/categori-3.png",
  },
  {
    name: "Mechanic Zone",
    img: "https://template.binaryvines.com/servat/assets/images/resource/categori-4.png",
  },
  {
    name: "Repairman",
    img: "https://template.binaryvines.com/servat/assets/images/resource/categori-5.png",
  },
  {
    name: "Plumber Service",
    img: "https://template.binaryvines.com/servat/assets/images/resource/categori-6.png",
  },
  {
    name: "Paint Chaise",
    img: "https://template.binaryvines.com/servat/assets/images/resource/categori-7.png",
  },
];

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <NavBar />
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: "750px",
          padding: "50px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* Left Side - Text & Form */}
        <Box sx={{ flex: 1, padding: "10px", marginTop: 5, color: "#black" }}>
          <Typography variant="h1" fontWeight="bold">
            Choose Experts to Complete Your Job Done
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 4, color: "gray" }}>
            Find trusted professionals for your home and business needs. Search
            now and connect with skilled service providers in your city.
          </Typography>

          {/* Search Form */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 5 }}>
            {/* City Selection */}
            <TextField
              select
              label="Select City"
              variant="outlined"
              borderRadius="15px"
              sx={{ width: "200px" }}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>

            {/* Search Input */}
            <TextField
              label="Find your Service here"
              variant="outlined"
              sx={{ width: "400px" }}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    sx={{ minWidth: "50px", backgroundColor: "orange" }}
                  >
                    <SearchIcon />
                  </Button>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Right Side - Image */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="https://template.binaryvines.com/servat/assets/images/banner/banner-girl-1.png"
            alt="Woman Working"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </Box>
      </Box>

      {/* Popular Categories Section */}
      <Box sx={{ padding: "50px", backgroundColor: "white" ,marginTop:4}}>
        {/* Title */}
        <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 4 }}>
          Popular Categories
        </Typography>

        {/* Categories Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 5,
          }}
        >
          {categories.map((category, index) => (
            <Box
              key={index}
              component="a"
              href="#"
              var
              sx={{
                textDecoration: "none",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                transition: "0.3s",
                border: "1px solid #ddd", // Light border added
                boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
                "&:hover": { backgroundColor: "#ffe6e6" },
              }}
            >
              {/* Category Image */}
              <img
                src={category.img}
                alt={category.name}
                style={{
                  width: "100px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {/* Category Name */}
              <Typography
                variant="h6"
                sx={{ marginTop: 2, fontWeight: "bold", color: "#333" }}
              >
                {category.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
