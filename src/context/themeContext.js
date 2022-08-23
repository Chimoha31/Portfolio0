import { createContext } from "react";


export const theme = {
  dark: {
    body: {
      background: "#333",
    },
    body02: {
      background: "#a393eb",
    },
    button: {
      color: "#B0BEC5",
      background: "#263238",
    },
    text: {
      color: "#ccc",
    },
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
    }
  }
}

const ThemeContext = createContext(theme.dark);

export default ThemeContext;