import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ThemeContext, { theme } from "./context/themeContext";

const App = () => {
  const [themeColor, setThemeColor] = useState(theme.light);

  const handleSwitch = () => {
    setThemeColor(theme.light);

    themeColor === theme.dark
      ? setThemeColor(theme.light)
      : setThemeColor(theme.dark);
  };

  return (
    <Router>
      <div>
        <MenuBar />
        <ThemeContext.Provider value={themeColor}>
          <Header handleSwitch={handleSwitch} />
          <Routes>
            <Route path="/" element={<Home handleSwitch={handleSwitch} />} />
            <Route path="/all_projects" element={<AllProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ThemeContext.Provider>
      </div>
    </Router>
  );
};

export default App;
