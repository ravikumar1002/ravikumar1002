import { Box, Typography, Theme, useTheme } from "@mui/material";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import makeSxStyles from "@hooks/makeSxStyles";
import Grid from "@mui/material/Unstable_Grid2";

const useStyles = makeSxStyles((theme: Theme) => ({
  workPageContainer: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    padding: theme.spacing(2, 0),
    paddingTop: "71px",
  },
  sectionHeading: {
    position: "relative",
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
    "&:after": {
      content: "''",
      position: "absolute",
      width: "60%",
      height: 0.1,
      backgroundColor: "#8892b0",
      top: "50%",
      left: 150,
    },
  },
}));

const Work = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [myProjects] = useState([
    {
      title: "Web Videos",
      description:
        "A react app using typescript. It's a small scale app like youtube.",
      repoLink: "https://github.com/ravikumar1002/web-video",
      liveLink: "https://webvideos.netlify.app/",
    },
    {
      title: "Familiar",
      description: "A sicial media dummy app.",
      repoLink: "https://github.com/ravikumar1002/known",
      liveLink: "https://familiar.netlify.app/",
    },
    {
      title: "Streaming",
      description: "A video library app.",
      repoLink: "https://github.com/ravikumar1002/streaming",
      liveLink: "https://streaming-player.netlify.app/",
    },
    {
      title: "Keep Notes",
      description: "This is a notes taking app.",
      repoLink: "https://github.com/ravikumar1002/keepNotes",
      liveLink: "https://keepingnotes.netlify.app/",
    },
    {
      title: "React Store",
      description: "React-Store is an ecommerce website.",
      repoLink: "https://github.com/ravikumar1002/react-store",
      liveLink: "https://store-in-react.netlify.app/",
    },
    {
      title: "particlesUI",
      description:
        "Explore the look and feel of components to speed up your development. ",
      repoLink: "https://github.com/ravikumar1002/component-library",
      liveLink: "https://particlesui-v2.netlify.app/",
    },
  ]);
  return (
    <Box sx={classes.workPageContainer} id="work-section">
      <Typography variant="h5" sx={classes.sectionHeading}>
        Projects
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: theme.spacing(4),
        }}
      >
        {myProjects.map((project) => (
          <Grid xs={12} sm={6} md={4}>
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
