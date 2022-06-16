import { Typography, Box } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Typography
        sx={{ fontFamily: "Dancing Script", fontWeight: "bold", fontSize: 80 }}
      >
        Riddhesh Mahajan
      </Typography>
      <Typography sx={{ fontSize: "2rem", marginTop: "1rem" }}>
        MERN Stack Developer
      </Typography>
    </Box>
  );
}

export default Hero;
