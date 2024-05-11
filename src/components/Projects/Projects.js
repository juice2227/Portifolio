import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
		let imgr = {weather};
  const gh = "https://github.com"
	  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const ProjectsFile = require("../../Assets/Projects/projects.json");
      setProjects(ProjectsFile);
    } catch (err) {
      setError("Failed to load projects.");
    }
  }, []);

  if (error || projects.lenght <= 0) {
		  console.log(error)
		  return (
		  <Container fluid className="project-section">
		  <h1 className="project-heading">Haven't worked on any project(s) yet</h1>
		  <p style={{ color: "white" }}>Thank you travellor for the interest in my projects, but I have none yet. Please check back later!</p>
		  </Container>
		  );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
		    {projects.map((project, index) => (
            <Col md={4} key={index} className="project-card">
              <ProjectCard
                imgPath={imgr[project.imgPath]}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
				ghLink={project.ghLink.startsWith(gh)? project.ghLink : `${gh}/${project.ghLink}`}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
         </Row>
      </Container>
    </Container>
  );
}

export default Projects;
