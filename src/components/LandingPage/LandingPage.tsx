import makeSxStyles from "@hooks/makeSxStyles";
import { Box, darken, alpha, Typography, Theme, useTheme } from "@mui/material";

const useStyles = makeSxStyles((theme: Theme) => ({
  landingPageContainer: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    animation: "$slideDown 1.5s",
  },
  "@keyframes slideDown": {
    "0%": {
      transform: "translate(-80%, 0)",
    },
    "100%": {
      transform: "translate(0, 0)",
    },
  },
  nameStyle: {
    color: alpha(theme.palette.common.white, 0.8),
    fontWeight: 400,
  },
  slagLine: {
    fontSize: "3.7rem",
  },
  tagline: {
    maxWidth: "500px",
    padding: theme.spacing(4, 0),
    letterSpacing: "0.6px",
    wordSpacing: "0.6px",
  },
  webWord: {
    zIndex: 20,
    position: "relative",
    color: "#fff",
    fontSize: "3.7rem",

    "&:after": {
      content: `""`,
      position: "absolute",
      bottom: 5,
      left: 0,
      backgroundColor: darken(theme.palette.secondary.main, 0.4),
      width: "100%",
      height: 16,
      zIndex: -2,
      transform: "skewX(307deg)",
      transition: theme.transitions.create([
        "transform",
        "bottom",
        "box-shadow",
      ]),
      boxShadow: "3px 3px 2px 1px #2323236b",
    },
    "&:hover": {
      "&:after": {
        bottom: 3,
        boxShadow: "none",
      },
    },
  },
  [theme.breakpoints.down("xs")]: {
    nameStyle: {
      fontSize: "3rem",
    },
    slagLine: {
      fontSize: "2.5rem",
    },
  },
}));

const LandingPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box sx={classes.landingPageContainer}>
      <Typography color="secondary">Hello World, my name is</Typography>
      <Typography sx={classes.nameStyle} variant="h2">
        Ravi Kumar.
      </Typography>
      <Typography variant="h2" sx={classes.slagLine}>
        I build things for the{" "}
        <Typography component={"span"} sx={classes.webWord}>
          {" "}
          web
        </Typography>
        .
      </Typography>
      <Typography sx={classes.tagline}>
        I&apos;m a web developer based in New Delhi, India specializing in
        building exceptional, high-quality websites and web applications.
      </Typography>
    </Box>
  );
};

export default LandingPage;
