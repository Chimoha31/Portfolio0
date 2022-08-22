import React, { Fragment } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import projectElements from "../projects/projectElements";
import projectElements02 from "../projects/projectElements02";
import projectElements03 from "../projects/projectElements03";
import "./Projects.scss";

const Projects = () => {
  return (
    <Fragment>
      <h2 className="text-center mt-5 mb-5">- Projects -</h2>
      <Carousel className="mb-5">
        {/* First Slide */}
        <Carousel.Item>
          <Container className="d-flex first_carousel">
            {projectElements.map((project) => (
              <Card
                className="card"
                style={{ width: "22rem", height: "25rem" }}
                key={project.id}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: "12rem" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
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
              <Card
                className="card"
                style={{ width: "22rem", height: "25rem" }}
                key={project.id}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: "12rem" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
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
              <Card
                className="card"
                style={{ width: "22rem", height: "25rem" }}
                key={project.id}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: "12rem" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
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
    </Fragment>
  );
};

export default Projects;
