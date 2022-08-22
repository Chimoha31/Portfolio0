import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <MenuBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_projects" element={<AllProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
