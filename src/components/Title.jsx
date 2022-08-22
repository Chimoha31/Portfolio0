import React from "react";
import "./Title.scss";

const Title = () => {
  return (
    <>
      <div className="introduce_container mt-5 mb-5">
        <div className="introduce d-flex flex-column justify-content-center align-items-center">
          <h2>Hi, I am</h2>
          <h1>Chiho Maekawa</h1>
          <p className="text-center">Front-End-Developer</p>
          <li>
            <a href="Resume.pdf" download="Resume" className="contact_btn mt-2">
              <i className="fas fa-download"></i>
              Resume
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Title;
