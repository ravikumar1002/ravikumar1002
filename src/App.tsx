import makeSxStyles from "@hooks/makeSxStyles";
import "./App.css";

import { Box, Theme, useTheme } from "@mui/material";
import About from "@components/About";
import Contact from "@components/Contact";
import Work from "@components/Work";
import LandingPage from "@components/LandingPage";
import Header from "@components/Header";
import { useLayoutEffect } from "react";

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

  useLayoutEffect(() => {
    const {pathname} = window.location
    
    if(pathname.includes('/resume')){
      window.location.replace('https://drive.google.com/file/d/1IG8wbnZcTWuStS4VqPYvIImAdqRBiA46')
    }
  }, []);

  return (
    <div className="App">
      <Box>
        <Header />
        <Box sx={classes.pageContainer}>
          <LandingPage />
          <Work />
          <Contact />
        </Box>
      </Box>
    </div>
  );
};

export default App;
