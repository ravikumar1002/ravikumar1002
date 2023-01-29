import { Box, Typography, alpha, darken, Theme, useTheme } from "@mui/material";
import { ReactComponent as Github } from "@resources/svg/github-brands.svg";
import { ReactComponent as ExternalLink } from "@resources/svg/external-link-alt-solid.svg";
import makeSxStyles from "@hooks/makeSxStyles";

const useStyles = makeSxStyles((theme: Theme) => ({
  projectCardContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    justifyContent: "space-between",
    height: {
      xs: "100%",
      sm: 200,
    },
    marginLeft: {
      xs: theme.spacing(0),
      sm: theme.spacing(2),
    },
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: `2px 2px 7px 0px ${darken(theme.palette.primary.main, 0.4)}`,
    transition: theme.transitions.create(["box-shadow"]),
    "&:hover": {
      boxShadow: `2px 2px 7px 0px ${darken(theme.palette.primary.main, 0.7)}`,
    },
  },
  proejctTextContainer: {
    flexGrow: "2",
    "&>a": {
      marginBottom: theme.spacing(2),
      textDecoration: "none",
      position: "relative",
      display: "inline-block",
      "&:after": {
        position: "absolute",
        bottom: -3,
        left: 0,
        width: "30%",
        height: 0.1,
        background: theme.palette.secondary.main,
        content: "''",
        transition: theme.transitions.create(["width"]),
      },
      "&:hover": {
        "&:after": {
          width: "90%",
        },
      },
    },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    "&>a>svg": {
      height: 18,
      color: alpha(theme.palette.common.white, 0.8),
      cursor: "pointer",
      transition: theme.transitions.create(["color", "transform"]),
      "&:hover": {
        color: theme.palette.secondary.main,
        transform: "scale(1.2)",
      },
    },
  },
}));

interface IProjectCardProps {
  title: string;
  description: string;
  repoLink: string;
  liveLink: string;
}

const ProjectCard = (props: IProjectCardProps) => {
  const { title, description, repoLink, liveLink } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box sx={classes.projectCardContainer}>
      <Box sx={classes.proejctTextContainer}>
        <Typography variant="h6" component="a" href={liveLink}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Box sx={classes.iconContainer}>
          <a href={repoLink} target="_blank" >
            <Github />
          </a>
          <a href={liveLink} target="_blank" >
            <ExternalLink />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
