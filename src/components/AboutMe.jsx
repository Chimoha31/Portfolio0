import React, { useContext } from "react";
import "./AboutMe.scss";
import chiho from '../images/chiho.JPG';
import ThemeContext from '../context/themeContext';

const AboutMe = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="aboutme_container" style={theme.body}>
       {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe8b6" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,128C384,149,480,203,576,197.3C672,192,768,128,864,106.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
      <ul className="d-flex flex-column justify-content-centrer align-items-center container mb-0">
        <li>
          <h1>About Me</h1>
        </li>
        <li>
          <div className="aboutme_border" style={theme.text}></div>
        </li>
        <li>
          <img src={chiho} alt="Chiho" />
        </li>
        <li>
          <p className="text-center aboutme_text" style={theme.text}>
            A front-end developer who enjoys building creative websites and
            applications. I love to create websites that put smiles on people's
            faces. I always think of helping people's daily life with my work.
            I'm a hard worker who possesses a passion for web development by
            combining all of my knowledge and skills. Thank you for your time
            and consideration.
          </p>
        </li>
        <li>
          <a href="Resume.pdf" download="Resume" className="contact_btn" style={theme.text}>
            <i className="fas fa-download px-2"></i>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
