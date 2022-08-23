import React, { useContext } from "react";
import "./Title.scss";
import ThemeContext from '../context/themeContext';

const Title = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="introduce_container" style={theme.body}>
        <div className="introduce d-flex flex-column justify-content-center align-items-center">
          <h2 style={theme.text}>Hi, I am</h2>
          <h1 style={theme.text}>Chiho Maekawa</h1>
          <p className="text-center">Front-End-Developer</p>
          <li>
            <a href="Resume.pdf" download="Resume" className="contact_btn mt-5" style={theme.text}>
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
