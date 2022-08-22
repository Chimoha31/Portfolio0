import React from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Projects from './components/Projects';
import Title from './components/Title';

const App = () => {
  return (
    <div>
      <MenuBar />
      <Header />
      <Title />
      <Projects />
      <AboutMe />
    </div>
  )
}

export default App

