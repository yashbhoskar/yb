import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Bhoskar </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as a software Engineer at Automaton Ai
            Infosystem.
            <br />
            I have completed BTech from College of Engineering Pune.
            <br />
            {/* <br />
            Apart from coding, some other activities that I love to do! */}
          </p>
          <p>
            Results-driven programmer, team player with over 1 year of
            experience with passion of developing innovative solutions and
            implementing new initiatives in different domains, with a focus on
            code optimisation. Hands-on expertise with a variety of cutting-edge
            tech including Python Flask, React, Angular, Java and SQL and
            MongoDB databases, and more. For a detailed representation of my
            work and capabilities,
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
