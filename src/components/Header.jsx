import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
// import { InputLabel, Toolbar, Switch } from "@mui/material";
import ThemeContext from "../context/themeContext";

const Header = ({ handleSwitch }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="header_container">
      <Navbar style={theme.body} className="shadow">
        <Container className="mx-3">
          <Nav className="me-auto">
            <Nav.Link href="/" style={theme.text}>
              <i className="fas fa-home mx-3" style={{color: "#dac292"}}></i>Home
            </Nav.Link>
            <Nav.Link href="/all_projects" style={theme.text}>
              <i className="fab fa-react mx-1" style={{color: "skyBlue"}}></i>Works
            </Nav.Link>
            <Nav.Link href="/contact" style={theme.text}>
              <i className="fas fa-mail-bulk mx-3" style={{color: "#f9ccac"}}></i>Contact
            </Nav.Link>
            <Nav.Link href="Resume.pdf" download="Resume" style={theme.text}>
              <i className="fas fa-download mx-3" style={{color: "#96ceb4"}}></i>Resume
            </Nav.Link>
          </Nav>
          {/* <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <InputLabel style={theme.text}>dark</InputLabel>
            <Switch defaultChecked onClick={handleSwitch} />
            <InputLabel style={theme.text}>light</InputLabel>
          </Toolbar> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
