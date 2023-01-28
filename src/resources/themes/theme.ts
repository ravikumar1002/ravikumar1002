import { createTheme, alpha, PaletteMode, Theme, ThemeOptions } from '@mui/material';


// declare module '@mui/material/styles' {

// }


const theme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#003049",
      dark: "#222"
    },
    secondary: {
      main: "#64ffda"
    },
    background: {
      paper: "#0A192F"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "rgb(187 187 187)"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          elevation: 0,
          square: true
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: alpha("#fff", 0.8),
          textTransform: "inherit",
        },
        textSizeSmall: {
          fontSize: "0.76rem"
        }
      }
    }
  },
})

export default theme
