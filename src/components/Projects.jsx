import React, { useContext } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import projectElements from "../projects/projectElements";
import projectElements02 from "../projects/projectElements02";
import projectElements03 from "../projects/projectElements03";
import "./Projects.scss";
import ThemeContext from "../context/themeContext";
import { Link } from "react-router-dom";


const Projects = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="projects_container pb-5" style={theme.body02}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,128C384,149,480,203,576,197.3C672,192,768,128,864,106.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
        <h2 className="text-center pt-5 mb-5 project_title">Projects</h2>
        <div className="project_border"></div>
        <Carousel className="mb-5">
          {/* First Slide */}
          <Carousel.Item>
            <Container className="d-flex first_carousel">
              {projectElements.map((project) => (
                <Card className="card" key={project.id}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{ height: "12rem" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="tech_icons">
                      <div className="tech_lang">
                        {project.technology.map((tech, index) => (
                          <p key={index} className="mb-1">
                            {tech}
                          </p>
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
                  </Card.Body>
                </Card>
              ))}
            </Container>
          </Carousel.Item>

          {/* 2nd Slide */}
          <Carousel.Item>
            <Container className="d-flex first_carousel">
              {projectElements02.map((project) => (
                <Card className="card" key={project.id}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{ height: "12rem" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="tech_icons">
                      <div className="tech_lang">
                        {project.technology.map((tech, index) => (
                          <p key={index} className="mb-1">
                            {tech}
                          </p>
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
                  </Card.Body>
                </Card>
              ))}
            </Container>
          </Carousel.Item>

          {/* 3rd Slide */}
          <Carousel.Item>
            <Container className="d-flex first_carousel">
              {projectElements03.map((project) => (
                <Card className="card" key={project.id}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{ height: "12rem" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="tech_icons">
                      <div className="tech_lang">
                        {project.technology.map((tech, index) => (
                          <p key={index} className="mb-1">
                            {tech}
                          </p>
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
                  </Card.Body>
                </Card>
              ))}
            </Container>
          </Carousel.Item>
        </Carousel>
        <ul className="d-flex flex-column justify-content-center align-items-center" style={{listStyle: "none"}}>
          <li className="btn_p">
            <p>??? See All my projects from the below button ???</p>
          </li>
          <li className="work_detail">
            <Link to="/all_projects" className="works_btn" style={{textDecoration: "none", color: "#333"}}>
              <i className="fab fa-react"></i>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
