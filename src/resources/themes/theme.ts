import { createTheme, Fade, PaletteMode, Theme, ThemeOptions } from '@mui/material';


declare module '@mui/material/styles' {
  interface palette {
    mode: PaletteMode,
  }
}


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
    },
    offWhite: {
      main: "rgb(136, 146, 176)"
    }
  },
  props: {
    MuiPaper: {
      elevation: 0,
      square: true
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        // color: "rgb(136, 146, 176)"
        color: "rgb(187 187 187)"
      }
    },
    MuiButton: {
      root: {
        color: "#fff",
        textTransform: "inherit",
      },
      textSizeSmall: {
        fontSize: "0.76rem"
      }
    }
  },
  custom: {
    fontFamily: {
      codeStyle: `"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace`
    }
  }
})

export default theme
