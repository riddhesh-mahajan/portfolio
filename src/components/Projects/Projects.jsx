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
import Project from "./Project";

function Projects() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <Container>
          <Box p={10}>
            <Typography variant="h1" textAlign="center">
              My Projects
            </Typography>
          </Box>

          <Stack spacing={15}>
            <Project />
            <Project />
            <Project />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Projects;
