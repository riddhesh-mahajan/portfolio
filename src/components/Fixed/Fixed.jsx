import { Box, Fab, Stack, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Fixed() {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Box sx={{ position: "fixed", left: 0, top: 0, padding: 2 }}>
        <Typography
          sx={{
            fontFamily: "Dancing Script",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Riddhesh
        </Typography>
      </Box>

      <Box sx={{ position: "fixed", right: 0, top: 0, padding: 2 }}>
        <Typography variant="body1">riddhesh.maha@gmail.com</Typography>
      </Box>

      <Box sx={{ position: "fixed", left: 0, bottom: 0, padding: 2 }}>
        <Stack spacing={2}>
          <Fab sx={{ boxShadow: "none", backgroundCOlor: "white" }}>
            <GitHubIcon />
          </Fab>
          <Fab sx={{ boxShadow: "none", backgroundCOlor: "white" }}>
            <LinkedInIcon />
          </Fab>
        </Stack>
      </Box>

      <Box sx={{ position: "fixed", right: 0, bottom: 0, padding: 2 }}>
        <Typography textAlign="end">
          @2022 RIDDHESH
          <br />
          ALL RIGHTS RESERVED
        </Typography>
      </Box>
    </Box>
  );
}

export default Fixed;
