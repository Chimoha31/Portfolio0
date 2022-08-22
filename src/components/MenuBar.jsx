import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
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
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }}>
              <a className="nav-link" href="/">
                <i className="fas fa-home mx-3"></i>
                Home
              </a>
            </li>
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }}>
              <a href="/works" className="nav-link">
                <i className="fab fa-react mx-3"></i>
                Works
              </a>
            </li>
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }}>
              <a href="/contact" className="nav-link">
                <i className="fas fa-mail-bulk mx-3"></i>
                Contact
              </a>
            </li>
            <li className="nav-item active my-3" style={{ fontSize: "1.3rem" }}>
              <a href="Resume.pdf" className="nav-link" download="Resume">
                <i className="fas fa-download mx-3"></i>Resume
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuBar;
