import makeSxStyles from "@hooks/makeSxStyles";
import "./App.css";

import { Box, Theme, useTheme } from "@mui/material";
import About from "@components/About";
import Contact from "@components/Contact";
import Work from "@components/Work";
import LandingPage from "@components/LandingPage";
import Header from "@components/Header";
import LeftSidebar from "@components/LeftSidebar";
import RightSidebar from "@components/RightSidebar";

const useStyles = makeSxStyles((theme: Theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: {
      lg: theme.spacing(0, 22),
      md: theme.spacing(0, 20),
      sm: theme.spacing(0, 12),
      xs: theme.spacing(0, 4),
    },
  },
}));

const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className="App">
      <Box>
        <Header />
        <LeftSidebar />
        <RightSidebar />
        <Box sx={classes.pageContainer}>
          <LandingPage />
          <About />
          <Work />
          <Contact />
        </Box>
      </Box>
    </div>
  );
};

export default App;
