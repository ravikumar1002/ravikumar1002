import About from "@components/About";
import makeSxStyles from "@hooks/makeSxStyles";
import {
  Box,
  darken,
  alpha,
  Typography,
  Theme,
  useTheme,
  keyframes,
} from "@mui/material";

const useStyles = makeSxStyles((theme: Theme) => ({
  landingPageContainer: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  nameStyle: {
    color: "white",
    fontWeight: 400,
    fontSize: {
      xs: "3rem",
      sm: "3.75rem",
    },
  },
  slagLine: {
    fontSize: {
      xs: "2.5rem",
      sm: "3.7rem",
    },
  },
}));

const LandingPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box sx={classes.landingPageContainer}>
      <Box>
        <Typography variant="h4">UI/UX Developer</Typography>
        <Typography variant="h2" sx={classes.slagLine}>
          Hi, I'm
          <Typography component={"span"} sx={classes.nameStyle}>
            {" "}
            Ravi Kumar{" "}
          </Typography>
          from India
        </Typography>
      </Box>
      <Box>
        <About />
      </Box>
    </Box>
  );
};

export default LandingPage;
