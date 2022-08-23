import { createContext } from "react";


export const theme = {
  dark: {
    body: {
      background: "#333",
    },
    body02: {
      background: "#9b5d73",
    },
    button: {
      color: "#B0BEC5",
      background: "#263238",
    },
    text: {
      color: "#ccc",
    },
    icondark: {
      color: "yellow",
    },
    iconlight: {
      color: "#fff",
    }
  },
  light: {
    body: {
      background: "#fff",
    },
    button: {
      color: "#333",
      background: "#F9FBE7",
    },
    text: {
      color: "#333",
    },
    icondark: {
      color: "black",
    },
    iconlight: {
      color: "orange",
    }
  }
}

const ThemeContext = createContext(theme.dark);

export default ThemeContext;