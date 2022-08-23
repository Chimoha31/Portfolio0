import React, { Fragment } from "react";
import Title from "./Title";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";

const Home = ({handleSwitch}) => {
  return (
    <Fragment>
      <Title handleSwitch={handleSwitch} />
      <Projects />
      <AboutMe />
      <Technologies />
    </Fragment>
  );
};

export default Home;
