import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import "./Footer.scss";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="footer" style={theme.body}>
      <p style={theme.text}>&copy;2021-2022 Chiho Maekawa - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
