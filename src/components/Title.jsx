import React, { useContext } from "react";
import "./Title.scss";
import { Toolbar, Switch } from "@mui/material";
import ThemeContext from "../context/themeContext";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Title = ({ handleSwitch }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="introduce_container" style={theme.body}>
        <div className="theme_color">
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <DarkModeIcon style={theme.icondark} />
            <Switch defaultChecked onClick={handleSwitch} />
            <Brightness7Icon style={theme.iconlight} />
          </Toolbar>
        </div>
        <div className="introduce d-flex flex-column justify-content-center align-items-center">
          <h2 style={theme.text}>Hi, I am</h2>
          <h1 style={theme.text}>Chiho Maekawa</h1>
          <p className="text-center">Front-End-Developer</p>
          <li>
            <a
              href="Resume.pdf"
              download="Resume"
              className="contact_btn mt-5"
              style={theme.text}
            >
              <i className="fas fa-download px-2" style={theme.text}></i>
              Resume
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Title;
