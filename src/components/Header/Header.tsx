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
} from "@mui/material";

import { ReactComponent as Logo } from "@resources/svg/logo.svg";

const useStyles = makeSxStyles((theme: Theme) => ({
  appbarStyle: {
    transition: theme.transitions.create(["box-shadow"]),
    padding: theme.spacing(0, 8),
    overflow: "hidden",
  },
  toolbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navItemsContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    animation: "$slideLeft 2s",
    "&>a": {
      fontFamily: theme.custom.fontFamily.codeStyle,
      transition: theme.transitions.create(["color", "background-color"]),
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        color: theme.palette.secondary.main,
      },
    },
  },
  logoStyle: {
    animation: "$logoAnim 1s",
    cursor: "pointer",
    height: 45,
  },
  "@keyframes logoAnim": {
    "0%": {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    "99%": {
      left: "88px",
      top: "10px",
      position: "fixed",
      transform: "translate(0%, 0%)",
    },
    "100%": {
      position: "relative",
    },
  },
  "@keyframes logoAnimMobile": {
    "0%": {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    "99%": {
      left: "36px",
      top: "8px",
      position: "fixed",
      transform: "translate(0%, 0%)",
    },
    "100%": {
      position: "relative",
    },
  },
  [theme.breakpoints.down("xs")]: {
    navItemsContainer: {
      display: "none",
    },
    appbarStyle: {
      padding: theme.spacing(0, 2),
    },
    logoStyle: {
      animation: "$logoAnimMobile 1s",
    },
  },
  "@keyframes slideLeft": {
    "0%": {
      transform: "translate(120%, 0)",
    },
    "35%": {
      transform: "translate(120%, 0)",
    },
    "100%": {
      transform: "translate(0, 0)",
    },
  },
}));

const navbarItems = ["About", "Work", "Contact"];

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleNavigation = (navTarget: any) => {
    const el = document.getElementById(navTarget);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <AppBar
        sx={classes.appbarStyle}
        position="sticky"
        elevation={trigger ? 8 : 0}
      >
        <Toolbar component="nav" sx={classes.toolbarContainer}>
          <Box>
            <Box
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
              sx={classes.logoStyle}
            >
              <Logo style={{ width: 45, height: 45 }} />
            </Box>
          </Box>
          <Box sx={classes.navItemsContainer}>
            {navbarItems.map((item) => (
              <Button
                size="small"
                onClick={() =>
                  handleNavigation(`${item.toLowerCase()}-section`)
                }
                component="a"
                key={item}
              >
                {item}
              </Button>
            ))}
            <Button
              target="_blank"
              component="a"
              size="small"
              href="https://dev.to/ravikumar1002"
            >
              Blogs
            </Button>
            <Button
              target="_blank"
              component="a"
              variant="outlined"
              href="https://github.com/ravikumar1002"
            >
              Github
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;