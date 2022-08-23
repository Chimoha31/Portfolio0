import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';
import allProjectsElements from '../projects/allProjectsElements';
import './AllProjects.scss';

const AllProjects = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="allprojects_container pt-5" style={theme.body}>
      {allProjectsElements.map((project) => (
        <div className="projects_card" key={project.id}>
          <img src={project.image} className="card_pic" alt="card" />
          <h2 className="card_title" style={theme.text}>{project.title}</h2>
          <p className="card_description" style={theme.text}>{project.description}</p>
          <div className="tech_icons">
            <div className="tech_lang">
              {project.technology.map((tech, index) => (
                <p key={index} className="my-1">{tech}</p>
              ))}
            </div>
          </div>
          <div className="button">
            <a href={project.github} className="github">
              github
            </a>
            <a href={project.app} className="app">
              App
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllProjects