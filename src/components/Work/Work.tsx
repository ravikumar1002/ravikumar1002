import {
  Box,
  Typography,
  Theme,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import makeSxStyles from "@hooks/makeSxStyles";

const useStyles = makeSxStyles((theme: Theme) => ({
  workPageContainer: {
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    padding: theme.spacing(2, 0),
    paddingTop: "71px" ,
  },
  sectionHeading: {
    position: "relative",
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
    "&:after": {
      content: "''",
      position: "absolute",
      width: "40%",
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
      showcaseImage: "https://thoughtlessmind.dev/image/ytPlaylistinfoSS1.png",
    },
  ]);
  return (
    <Box sx={classes.workPageContainer} id="work-section">
      <Typography variant="h5" sx={classes.sectionHeading}>
        Work
      </Typography>
      {myProjects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          repoLink={project.repoLink}
          liveLink={project.liveLink}
          showcaseImage={project.showcaseImage}
        />
      ))}
    </Box>
  );
};

export default Work;
