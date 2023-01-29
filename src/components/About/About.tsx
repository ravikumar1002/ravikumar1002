import makeSxStyles from "@hooks/makeSxStyles";
import { Box, Typography, Theme, useTheme, alpha } from "@mui/material";

import { ReactComponent as ReactLogo } from "@resources/svg/react-logo.svg";
import { ReactComponent as GitLogo } from "@resources/svg/git-brand-logo.svg";
import { ReactComponent as HtmlLogo } from "@resources/svg/html5-logo.svg";
import { ReactComponent as Css3Logo } from "@resources/svg/css3-logo.svg";
import { ReactComponent as GithubLogo } from "@resources/svg/github-brand-logo.svg";
import { ReactComponent as JsLogo } from "@resources/svg/js-square-logo.svg";
import { ReactComponent as FireBaseLogo } from "@resources/svg/firebase-logo.svg";

const techs = [
  {
    name: "javascript",
    Icon: JsLogo,
    color: "#f0db4f",
  },
  {
    name: "reactjs",
    Icon: ReactLogo,
    color: "#61DBFB",
  },
  {
    name: "html",
    Icon: HtmlLogo,
    color: "#FF5733",
  },
  {
    name: "css",
    Icon: Css3Logo,
    color: "#264de4",
  },
  {
    name: "git",
    Icon: GitLogo,
    color: "#f44d27",
  },
  {
    name: "github",
    Icon: GithubLogo,
    color: "#000",
  },
  {
    name: "firebase",
    Icon: FireBaseLogo,
    color: "#f0db4f",
  },
];

const useStyles = makeSxStyles((theme: Theme) => ({
  aboutPageContainer: {
    height: "100vh",
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
  aboutText: {
    lineHeight: 1.3,
    letterSpacing: 0.3,
    wordSpacing: 0.6,
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing(5),
    paddingTop: {
      xs: theme.spacing(2),
      sm: theme.spacing(4),
    },
    height: {
      xs: "60%",
    },
    "&> div:first-child": {
      width: {
        xs: "100%",
        sm: "60%",
      },
    },
    "&> div:last-child": {
      display: {
        xs: "none",
        sm: "inherit",
      },
      width: "40%",
    },
  },
  animContainer: {
    height: " 30vh",
  },
  jsWordStyle: {
    position: "relative",
    background: "linear-gradient(to top, #ecec0654 39%, transparent 30%)",
    color: "#fff",
  },
  reactWordStyle: {
    background: "linear-gradient(to top, #61dafb7a 39%, transparent 30%)",
    color: "#fff",
  },
  logosContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    gap: theme.spacing(2),
    "&>svg": {
      width: 35,
      height: 35,
      cursor: "pointer",
      color: `${alpha(theme.palette.common.white, 0.8)}`,
      transition: "color 0.3s",
      "&:hover": {
        "&.logo0": {
          color: techs[0].color,
        },
        "&.logo1": {
          color: techs[1].color,
        },
        "&.logo2": {
          color: techs[2].color,
        },
        "&.logo3": {
          color: techs[3].color,
        },
        "&.logo4": {
          color: techs[4].color,
        },
        "&.logo5": {
          color: techs[5].color,
        },
        "&.logo6": {
          color: techs[6].color,
        },
      },
    },
  },
}));

const About = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box sx={classes.aboutPageContainer} id="about-section">
      <Typography variant="h5" sx={classes.sectionHeading}>
        About me
      </Typography>
      <Box sx={classes.contentContainer}>
        <Box
          sx={{
            lineHeight: 1.5,
          }}
        >
          <Typography component={"div"} sx={classes.aboutText}>
            Hello! I&apos;m Ravi Kumar, a frontend web developer who enjoys
            building things that live on the internet.
          </Typography>
          <Typography
            component={"div"}
            style={{ marginTop: 8 }}
            sx={classes.aboutText}
          >
            I love working with{" "}
            <Typography component={"span"} sx={classes.jsWordStyle}>
              Javascript
            </Typography>{" "}
            and web technologies. I majorly work with{" "}
            <Typography component={"span"} sx={classes.reactWordStyle}>
              React
            </Typography>{" "}
            and frontend tools and technologies.
          </Typography>
          <Typography
            component={"div"}
            style={{ marginTop: 8 }}
            sx={classes.aboutText}
          >
            Besides this, I strictly prefer writing well-documented readable
            code.
          </Typography>
          <Typography
            component={"div"}
            style={{ marginTop: 32 }}
            sx={classes.aboutText}
          >
            Technologies I work with:
          </Typography>
          <Box sx={classes.logosContainer}>
            {techs.map((item, index) => (
              <item.Icon key={item.name} className={`logo${index}`} />
            ))}
          </Box>
        </Box>
        <Box sx={classes.animContainer}> </Box>
      </Box>
    </Box>
  );
};

export default About;
