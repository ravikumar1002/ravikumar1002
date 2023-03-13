import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Theme,
  useTheme,
  alpha,
} from "@mui/material";
import { ReactComponent as Dev } from "@resources/svg/dev-logo.svg";
import { ReactComponent as Github } from "@resources/svg/github-logo.svg";
import { ReactComponent as Twitter } from "@resources/svg/twitter-logo.svg";
import { ReactComponent as Linkedin } from "@resources/svg/linkedin-logo.svg";
import { ReactComponent as Email } from "@resources/svg/email-logo.svg";


import makeSxStyles from "@hooks/makeSxStyles";

const socialLinks = [
  {
    name: "Dev",
    Icon: () => <Dev />,
    link: "https://dev.to/ravikumar1002",
  },
  {
    name: "Twitter",
    Icon: () => <Twitter />,
    link: "https://twitter.com/kumarravi1002",
  },
  {
    name: "Linkedin",
    Icon: () => <Linkedin />,
    link: "https://www.linkedin.com/in/ravikumar1002/",
  },
  {
    name: "Github",
    Icon: () => <Github />,
    link: "https://github.com/ravikumar1002",
  },
  {
    name: "Email",
    Icon: () => <Email/>,
    link: "mailto:1002kumarravi@gmail.com",
  },
];
const useStyles = makeSxStyles((theme: Theme) => ({
  contactContaine: {
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
      width: "40%",
      height: 0.1,
      backgroundColor: "#8892b0",
      top: "50%",
      left: 150,
    },
  },
  helloButton: {
    padding: theme.spacing(2, 4),
    display: "block",
    textAlign: "center",
    margin: "0 auto",
    width: 150,
    marginTop: theme.spacing(2),
  },
  iconsContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    "&>a>svg": {
      width: theme.spacing(4),
      height: theme.spacing(4),
      cursor: "pointer",
      color: alpha(theme.palette.common.white, 0.8),
      transition: theme.transitions.create("transform"),
      "&:hover": {
        color: theme.palette.secondary.main,
        transform: "scale(1.1)",
      },
    },
  },
}));

const Contact = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box sx={classes.contactContaine} id="contact-section">
      <Divider sx={{ margin: "32px auto", width: "80%" }} />
      <Box p={3}>
        <Typography align="center">
          Me and other works can be found here:
        </Typography>
        <Box sx={classes.iconsContainer}>
          {socialLinks.map((link, i) => (
            <a href={link.link} key={i} target="_blank" rel="noreferrer">
              <link.Icon />
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
