import { Container, Typography, Box } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Fixed from "./components/Fixed/Fixed";

function App() {
  return (
    <>
      <Fixed />

      <Hero />

      <Container>
        <Skills />
      </Container>

      <Projects />

      <Box sx={{ minHeight: 1000, backgroundColor: "black" }}></Box>
    </>
  );
}

export default App;
