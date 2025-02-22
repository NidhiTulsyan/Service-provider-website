import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home","about Us","Service","Blog","Contact"];

function NavBar () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{"backgroundColor":"white",height:"90px" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between",height:"90px",alignItems:"center"}}>
          {/* Logo Section (20% width) */}          
          <Box sx={{ width: "20%", display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "primary",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          {/* Navigation Links (50% width) */}
          <Box sx={{ width: "50%", display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: "primary", mx: 2 }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button variant="outlined" color="primary" fullWidth>
                  Sign In
                </Button>
              </MenuItem>
              <MenuItem>
                <Button variant="contained" color="secondary" fullWidth>
                  Sign Up
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Sign In & Sign Up Buttons (30% width) */}
          <Box sx={{ width: "30%", display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
              Sign In
            </Button>
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

