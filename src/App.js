import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";

const App = () => {
  return (
    <Router>
      <div>
        <MenuBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
