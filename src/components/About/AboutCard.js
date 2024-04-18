import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">CELINE BENARD </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently a Freelancer.
            <br />
            Im currently pursuing information Technoloogy at Pwani University
  .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing trends in tech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference one step at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Benard</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
