import React from "react";
import { Box, Typography, Link, IconButton, TextField, Button, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#FDFBF2", color: "Black", padding: "40px 20px" }} height={"320px"} >
      <Grid container spacing={4} marginTop={3}>
        {/* First Part - Logo and About */}
        <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold">Your Logo</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>About Us</Typography>
          <Typography variant="body2" sx={{ marginTop: 1, color: "#ccc" }}>
            We are committed to connecting experts with those in need. Reliable services, just a click away.
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "black" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "black" }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "black" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "black" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>

        {/* Second Part - Company Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight="bold">Company</Typography>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>Contact Us</Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>Blog</Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>Marketplace</Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>Social Good</Link>
        </Grid>

        {/* Third Part - Support Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight="bold">Support</Typography>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>Help Topics</Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>FAQ</Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>Verify</Link>
          <Link href="#" color="inherit" underline="none" display="block" sx={{ marginTop: 2 }}>Post a Job</Link>
        </Grid>

        {/* Fourth Part - Newsletter & Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold">Join Our Newsletter</Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "5px", flexGrow: 1 }}
            />
            <Button variant="contained" sx={{ backgroundColor: "#ff9800", marginLeft: 1 }}>Subscribe</Button>
          </Box>
          <Box sx={{ marginTop: 3, display: "flex", alignItems: "center" }}>
            <LocationOn sx={{ marginRight: 1 }} />
            <Typography variant="body2">123, Your Street, Your City</Typography>
          </Box>
          <Box sx={{ marginTop: 1, display: "flex", alignItems: "center" }}>
            <Phone sx={{ marginRight: 1 }} />
            <Typography variant="body2">+91 9876543210</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Copyright Text */}
      <Box sx={{ textAlign: "center", marginTop: 7, marginBottom:4, borderTop: "1px solid #555", paddingTop: 2 }}>
        <Typography variant="body1" fontWeight={"bold"}>All Rights Reserved © 2025 Nidhi Tulsyan</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
