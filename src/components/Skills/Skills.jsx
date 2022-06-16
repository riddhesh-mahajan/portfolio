import { Box, Stack, Typography } from "@mui/material";
import expressimg from "../../assets/express.svg";
import mongodbimg from "../../assets/mongodb.svg";
import nodejsimg from "../../assets/nodejs.svg";
import reactimg from "../../assets/react.svg";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          paddingBottom: 20,
        }}
      >
        <Box p={5}>
          <Typography variant="h1" textAlign="center">
            My Skills
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 10 }}
          >
            <SkillCard skillLogo={reactimg} skillName="React" />
            <SkillCard skillLogo={mongodbimg} skillName="MongoDB" />
            <SkillCard skillLogo={expressimg} skillName="Express" />
            <SkillCard skillLogo={nodejsimg} skillName="Node" />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
