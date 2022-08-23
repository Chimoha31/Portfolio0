import React, { Fragment } from "react";
import Title from "./Title";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <Fragment>
      <Title />
      <Projects />
      <AboutMe />
      <Technologies />
    </Fragment>
  );
};

export default Home;
