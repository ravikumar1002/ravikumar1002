import makeSxStyles from "@hooks/makeSxStyles";
import { Box, Typography, Theme, useTheme, alpha } from "@mui/material";

import { ReactComponent as ReactLogo } from "@resources/svg/react-logo.svg";
import { ReactComponent as HtmlLogo } from "@resources/svg/html5-logo.svg";
import { ReactComponent as Css3Logo } from "@resources/svg/css-logo.svg";
import { ReactComponent as JsLogo } from "@resources/svg/javascript-logo.svg";
import { ReactComponent as TsLogo } from "@resources/svg/typescript-logo.svg";
import { ReactComponent as MUILogo } from "@resources/svg/material-ui-logo.svg";
import { ReactComponent as ReduxLogo } from "@resources/svg/redux-logo.svg";
import { ReactComponent as ReactRouterLogo } from "@resources/svg/react-router-logo.svg";
import { ReactComponent as BootstrapLogo } from "@resources/svg/bootstrap-logo.svg";
import { ReactComponent as FirebaseLogo } from "@resources/svg/firebase-logo.svg";
import { ReactComponent as GitLogo } from "@resources/svg/git-logo.svg";
import { ReactComponent as GithubLogo } from "@resources/svg/github-logo.svg";
import { ReactComponent as VsCodeLogo } from "@resources/svg/vs-code-logo.svg";

const techs = [
  {
    name: "javascript",
    Icon: JsLogo,
  },
  {
    name: "reactjs",
    Icon: ReactLogo,
  },
  {
    name: "html",
    Icon: HtmlLogo,
  },
  {
    name: "css",
    Icon: Css3Logo,
  },
  {
    name: "typescript",
    Icon: TsLogo,
  },
  {
    name: "redux",
    Icon: ReduxLogo,
  },
  {
    name: "react router",
    Icon: ReactRouterLogo,
  },
  {
    name: "material ui",
    Icon: MUILogo,
  },
  {
    name: "bootstrap",
    Icon: BootstrapLogo,
  },
  {
    name: "firebase",
    Icon: FirebaseLogo,
  },
  {
    name: "git",
    Icon: GitLogo,
  },
  {
    name: "github",
    Icon: GithubLogo,
  },
  {
    name: "vs code",
    Icon: VsCodeLogo,
  },
];

const useStyles = makeSxStyles((theme: Theme) => ({
  aboutText: {
    lineHeight: 1.3,
    letterSpacing: 0.3,
    wordSpacing: 0.6,
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
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
    gap: theme.spacing(2),
    "&>svg": {
      width: 35,
      height: 35,
      cursor: "pointer",
      transition: theme.transitions.create("transform"),
      "&:hover": {
        color: theme.palette.secondary.main,
        transform: "scale(1.1)",
      },
    },
  },
}));

const About = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
      <Box
        sx={{
          lineHeight: 1.5,
          marginTop: "2rem",
        }}
      >
        <Typography component={"div"} sx={classes.aboutText}>
          I&apos;m a frontend web developer who enjoys
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
          Besides this, I strictly prefer writing well-documented readable code.
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
            <item.Icon key={item.name} title={item.name} />
          ))}
        </Box>
      </Box>
  );
};

export default About;
