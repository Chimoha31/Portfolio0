import React from 'react';
import allProjectsElements from '../projects/allProjectsElements';
import './AllProjects.scss';

const AllProjects = () => {
  return (
    <div className="allprojects_container mt-5">
      {allProjectsElements.map((project) => (
        <div className="projects_card" key={project.id}>
          <img src={project.image} className="card_pic" alt="card" />
          <h2 className="card_title">{project.title}</h2>
          <p className="card_description">{project.description}</p>
          <div className="tech_icons">
            <div className="tech_lang">
              {project.technology.map((tech, index) => (
                <p key={index}>{tech}</p>
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