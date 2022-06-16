import { Grid, Box, Typography, Card, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function SkillCard({ skillLogo, skillName }) {
  const animation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView &&
      animation.start({
        scale: [1, 1, 1.2],
        rotate: [0, 360, 360],
      });
  }, [inView]);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Box textAlign="center" ref={ref}>
        <motion.div
          transition={{ duration: 1, delay: 1, type: "tween" }}
          animate={animation}
        >
          <Box
            sx={{
              height: "5rem",
              width: "5rem",
              borderRadius: "10rem",
              border: "solid",
              backgroundColor: "white",
              borderWidth: 0.2,
              borderColor: "#e3e3e3",
              marginBottom: 3,
            }}
            p={2}
          >
            <Box sx={{ minWidth: "100%" }} component="img" src={skillLogo} />
          </Box>
        </motion.div>

        <Typography color="text.secondary" sx={{ fontSize: "1.2rem" }}>
          {skillName}
        </Typography>
      </Box>
    </motion.div>
  );
}

export default SkillCard;
