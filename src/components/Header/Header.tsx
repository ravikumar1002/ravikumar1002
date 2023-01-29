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

import { ReactComponent as Logo } from "@resources/svg/logo.svg";

const logoAnim = keyframes`
  0% {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  99% {
    left: 88px;
    top: 10px;
    position: fixed;
    transform: translate(0%, 0%);
  }
  100% {
    position: relative;
  }
}`;

const logoAnimMobile = keyframes`
  0% {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  99% {
    left: 36px;
    top: 8px;
    position: fixed;
    transform: translate(0%, 0%);
  }
  100% {
    position: relative;
  }
}`;

const slideLeft = keyframes`
  0% {
    transform: translate(120%, 0);
  }
  35% {
    transform: translate(120%, 0);
  }
  100% {
    transform: translate(0, 0);
  },
},`;

const useStyles = makeSxStyles((theme: Theme) => ({
  appbarStyle: {
    transition: theme.transitions.create(["box-shadow"]),
    padding: {
      xs: theme.spacing(0, 2),
      sm: theme.spacing(0, 8),
    },
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
    animation: `${slideLeft} 1.2s`,
    "&>a": {
      fontFamily: `"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace`,
      transition: theme.transitions.create(["color", "background-color"]),
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        color: theme.palette.secondary.main,
      },
    },
  },
  logoStyle: {
    animation: {
      xs: `${logoAnimMobile} 1s`,
      sm: `${logoAnim} 1s`,
    },
    cursor: "pointer",
    height: 45,
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
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
                component="a"
                key={item}
              >
                {item}
              </Button>
            ))}
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
              variant="outlined"
              href="https://drive.google.com/file/d/1QMKeu0q-9ZcnaU6Jvqk2s82ZTUvbjZdL/view?usp=share_link"
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
