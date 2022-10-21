import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import './MenuBar.scss';

const MenuBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AiOutlineMenu onClick={handleShow} className="mx-3 my-3 menu_icon" style={{ fontSize: "1.3rem" }} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav ml-auto mt-5">
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }} onClick={handleClose}>
              <Link className="nav-link" to="/">
                <i className="fas fa-home mx-3" style={{color: "#dac292"}}></i>
                Home
              </Link>
            </li>
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }} onClick={handleClose}>
              <Link to="/all_projects" className="nav-link">
                <i className="fab fa-react mx-3" style={{color: "skyBlue"}}></i>
                Works
              </Link>
            </li>
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }} onClick={handleClose}>
              <Link to="/contact" className="nav-link">
                <i className="fas fa-mail-bulk mx-3" style={{color: "#f9ccac"}}></i>
                Contact
              </Link>
            </li>
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }} onClick={handleClose}>
              <a href="Resume.pdf" className="nav-link" download="Resume">
                <i className="fas fa-download mx-3" style={{color: "#96ceb4"}}></i>Resume
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuBar;
