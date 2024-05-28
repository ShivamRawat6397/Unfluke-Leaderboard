import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { styled } from "@mui/system";

const Logo = styled("img")({
  height: "32px",
});

const Icon = styled("img")({
  height: "24px",
  marginLeft: "16px",
});

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Logo src="/logo.png" alt="Unfluke Logo" />
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <Icon src="/bell.png" alt="Bell Icon" />
          </IconButton>
          <IconButton color="inherit">
            <Icon src="/coin.jpeg" alt="Coin Icon" />
          </IconButton>
          <IconButton color="inherit">
            <Icon src="/profile.jpg" alt="Profile Icon" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
