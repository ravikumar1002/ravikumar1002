import makeSxStyles from "@hooks/makeSxStyles";
import {
  Box,
  Divider,
  alpha,
  Typography,
  Theme,
  useTheme,
} from "@mui/material";

const RightSidebar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box sx={classes.leftSideContainer}>
      <Typography
        component="a"
        sx={classes.linkStyle}
        href="mailto:1002kumarravi@gmail.com"
      >
        1002kumarravi@gmail.com
      </Typography>
      <Divider orientation="vertical" sx={classes.verticalLine} />
    </Box>
  );
};

const useStyles = makeSxStyles((theme: Theme) => ({
  leftSideContainer: {
    listStyle: "none",
    position: "fixed",
    bottom: "0",
    right: theme.spacing(5),
    left: "auto",
    // height: "100vh",
    width: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: theme.spacing(16),
    animation: "$growVertically 2s 1",
    transformOrigin: "bottom",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "@keyframes growVertically": {
    "0%": {
      transform: "translateY(400px)",
    },
    "50%": {
      transform: "translateY(400px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
  linkStyle: {
    writingMode: "vertical-rl",
    textDecoration: "none",
    fontFamily: `"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace`,
    fontSize: 12,
    padding: theme.spacing(1),
    letterSpacing: "0.1em",
    color: alpha(theme.palette.common.white, 0.8),
    fontWeight: 300,
    transition: theme.transitions.create(["color"]),
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  verticalLine: {
    height: theme.spacing(15),
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default RightSidebar;
