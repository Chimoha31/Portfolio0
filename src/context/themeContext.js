import { createContext } from "react";


export const theme = {
  dark: {
    body: {
      background: "#333",
    },
    body02: {
      background: "#9b5d73",
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