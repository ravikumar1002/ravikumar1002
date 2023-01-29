import { Box, Divider, alpha, Theme, useTheme, keyframes } from "@mui/material";
import { ReactComponent as Dev } from "@resources/svg/dev-brands.svg";
import { ReactComponent as LinkedIn } from "@resources/svg/linkedin-brands.svg";
import { ReactComponent as Twitter } from "@resources/svg/twitter-brands.svg";
import { ReactComponent as Github } from "@resources/svg/github-brands.svg";
import makeSxStyles from "@hooks/makeSxStyles";

const socialLinks = [
  {
    name: "Github",
    Icon: (props: JSX.Element) => <Github {...props} />,
    link: "https://github.com/ravikumar1002",
  },
  {
    name: "LinkedIn",
    Icon: (props: JSX.Element) => <LinkedIn {...props} />,
    link: "https://www.linkedin.com/in/ravikumar1002/",
  },
  {
    name: "Dev",
    Icon: (props: JSX.Element) => <Dev {...props} />,
    link: "https://dev.to/ravikumar1002",
  },
  {
    name: "Twitter",
    Icon: (props: JSX.Element) => <Twitter {...props} />,
    link: "https://twitter.com/kumarravi1002",
  },
];

const growVertically = keyframes`
    0% {
      transform: translateY(400px)
    }
    50% {
      transform: translateY(400px)
    }
    100% {
      transform: translateY(0px)
    }
  }`;

const useStyles = makeSxStyles((theme: Theme) => ({
  leftSideContainer: {
    listStyle: "none",
    position: "fixed",
    bottom: "0",
    left: theme.spacing(5),
    width: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: theme.spacing(16),
    overflow: "hidden",
    animation: `${growVertically} 1.5s 1`,
    transformOrigin: "bottom",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  linksContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(16),
  },
  socialLink: {
    width: "18px",
    height: "18px",
    color: alpha(theme.palette.common.white, 0.8),
    transition: theme.transitions.create(["color", "transform"]),
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
      transform: "scale(1.1)",
    },
  },
  verticalLine: {
    height: theme.spacing(15),
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const LeftSidebar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box sx={classes.leftSideContainer}>
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a href={link.link} rel="noreferrer" target="_blank">
            <link.Icon
              //@ts-ignore
              style={classes.socialLink}
            />
          </a>
        </li>
      ))}
      <Divider orientation="vertical" sx={classes.verticalLine} />
    </Box>
  );
};

export default LeftSidebar;
