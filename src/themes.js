/* eslint-disable sort-keys */
import { createMuiTheme } from "@material-ui/core/styles";

export const themes = {
  main: createMuiTheme({
    palette: {
      primary: {
        main: "#144766",
        contrastText: "#F2F2F2"
      },
      secondary: {
        main: "#7F0414",
        contrastText: "#F2F2F2"
      },
      error: {
        main: "#CC041F",
        contrastText: "#F2F2F2"
      },
      background: {
        paper: "#f2f2f2",
        default: "#f2f2f2"
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
        icon: "rgba(0, 0, 0, 0.12)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.08)",
        hoverOpacity: 0.1,
        selected: "rgba(0, 0, 0, 0.14)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)"
      }
    },
    typography: {
      useNextVariants: true
    }
  })
};
