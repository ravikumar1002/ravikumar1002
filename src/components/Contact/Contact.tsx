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
import { ReactComponent as Dev } from "@resources/svg/dev-brands.svg";
import { ReactComponent as Github } from "@resources/svg/github-brands.svg";
import makeSxStyles from "@hooks/makeSxStyles";

const socialLinks = [
  {
    name: "Dev",
    Icon: (props: JSX.Element) => <Dev {...props} />,
    link: "https://dev.to/ravikumar1002",
  },
  {
    name: "Github",
    Icon: (props: JSX.Element) => <Github {...props} />,
    link: "https://github.com/ravikumar1002",
  },
];
const useStyles = makeSxStyles((theme: Theme) => ({
  contactContaine: {
    minHeight: "100vh",
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
      width: theme.spacing(3),
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
      <Typography sx={classes.sectionHeading} variant="h5">
        Contact
      </Typography>
      <Box p={3}>
        <Typography align="center">
          If you&apos;ve found anything intersing here or just wana have some
          technical chitchat, feel free to drop a mail. <br />
          I&apos;ll try my best to answer.
        </Typography>
        <Button
          component="a"
          href="mailto:1002kumarravi@gmail.com"
          variant="outlined"
          size="large"
          color="secondary"
          sx={classes.helloButton}
        >
          Say Hello
        </Button>
      </Box>
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