import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import expressimg from "../../assets/express.svg";
import mongodbimg from "../../assets/mongodb.svg";
import reactimg from "../../assets/react.svg";
import nodejsimg from "../../assets/nodejs.svg";
import w from "../../assets/w.jpg";
import SkillCard from "../Skills/SkillCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import BoltIcon from "@mui/icons-material/Bolt";

function Project() {
  return (
    <>
      <Grid container>
        <Grid item xs={5} p={4}>
          <Stack spacing={1}>
            <Box>
              <Typography
                variant="h3"
                sx={{ display: "inline", fontWeight: "light" }}
              >
                01&nbsp;
              </Typography>
              <Typography variant="h3" sx={{ display: "inline" }}>
                My Projects
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="justify"
            >
              My Projects My Projects My Projects My Projects My Projects My
              Projects My Projects My Projects My Projects
            </Typography>

            <Stack direction="row" spacing={1} sx={{ paddingTop: 1 }}>
              <Box
                sx={{
                  maxWidth: "3rem",
                  borderRadius: 3,
                  backgroundColor: "white",
                  padding: 1,
                  border: "solid",
                  borderWidth: 0.2,
                  borderColor: "#e3e3e3",
                }}
                component="img"
                src={reactimg}
              />

              <Box
                sx={{
                  maxWidth: "3rem",
                  borderRadius: 3,
                  backgroundColor: "white",
                  padding: 1,
                  border: "solid",
                  borderWidth: 0.2,
                  borderColor: "#e3e3e3",
                }}
                component="img"
                src={mongodbimg}
              />

              <Box
                sx={{
                  maxWidth: "3rem",
                  borderRadius: 3,
                  backgroundColor: "white",
                  padding: 1,
                  border: "solid",
                  borderWidth: 0.2,
                  borderColor: "#e3e3e3",
                }}
                component="img"
                src={expressimg}
              />

              <Box
                sx={{
                  maxWidth: "3rem",
                  borderRadius: 3,
                  backgroundColor: "white",
                  padding: 1,
                  border: "solid",
                  borderWidth: 0.2,
                  borderColor: "#e3e3e3",
                }}
                component="img"
                src={nodejsimg}
              />
            </Stack>

            <Stack direction="row" spacing={1} sx={{ paddingTop: 3 }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
              >
                View On Github
              </Button>
              <Button variant="outlined" size="large" startIcon={<BoltIcon />}>
                View Demo
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minHeight: "100%",
              minWidth: "100%",
            }}
          >
            <Box
              sx={{ maxWidth: "100%", borderRadius: 3 }}
              component="img"
              src={w}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
