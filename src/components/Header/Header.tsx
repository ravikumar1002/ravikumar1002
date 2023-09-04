import makeSxStyles from "@hooks/makeSxStyles";
import {
  AppBar,
  Box,
  useScrollTrigger,
  Button,
  Theme,
  useTheme,
  Toolbar,
  alpha,
  keyframes,
} from "@mui/material";

const useStyles = makeSxStyles((theme: Theme) => ({
  appbarStyle: {
    padding: {
      xs: theme.spacing(0, 2),
      sm: theme.spacing(0, 8),
    },
    overflow: "hidden",
    backgroundImage: "none",
    boxShadow: "none",
  },
  toolbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  navItemsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: theme.spacing(2),
    "&>a": {
      fontFamily: `"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace`,
      transition: theme.transitions.create(["color", "background-color"]),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.dark, 0.9),
        color: theme.palette.secondary.main,
      },
    },
  },
}));

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <AppBar sx={classes.appbarStyle} position="sticky">
        <Toolbar component="nav" sx={classes.toolbarContainer}>
          <Box sx={classes.navItemsContainer}>
            <Button
              target="_blank"
              component="a"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
              size="small"
              href="https://dev.to/ravikumar1002"
            >
              Blogs
            </Button>
            <Button
              target="_blank"
              component="a"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
              size="small"
              href="https://github.com/ravikumar1002/"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              component="a"
              variant="outlined"
              href="https://drive.google.com/file/d/16i1eQ7G91utZb2Z9i6nR5EPnU14HzW0J/view?usp=sharing"
              sx={{
                fontSize: "1.1rem",
              }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
