import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themeContext";
import Skills from "./skills/Skills";
import "./Technologies.scss";

const Technologies = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="works_container">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,128C384,149,480,203,576,197.3C672,192,768,128,864,106.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg> */}
      <ul className="container_w" style={theme.body02}>
        <li>
          <h1>Works</h1>
        </li>
        <li>
          <div className="works_border"></div>
        </li>
        <li>
          <p>
            I Have developed several websites and applications by using the
            following skills. Especially, React.
          </p>
        </li>
        <li>
          <Skills />
        </li>
        <li className="btn_p">
          <p>↓ See All my projects from the below button ↓</p>
        </li>
        <li className="work_detail">
          <Link to="/all_projects" className="works_btn">
            <i className="fab fa-react"></i>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Technologies;
