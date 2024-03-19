import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main-bg-2.svg";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Experience from "../Experience/Experience.jsx";

function Home() {
  return (
    <section>
      {/* <NavBar /> */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> YASH BHOSKAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <p className="mt-5">
                  Fluent in classics like{" "}
                  <span className="purple">
                    Python, ReactJs, Angular, ExpressJs, Java, Oracle Sql/PLSQL, MongoDB.
                  </span>{" "}
                  <br />
                  <br />
                  My field of Interest's are building new Web Technologies and
                  Products Passionate about <br /> implementing and launching{" "}
                  <b className="purple">new initiatives. </b>
                  <br />
                  <br />I bring a unique combination of <b className="purple"> technical skills </b> and
                  <b className="purple">creative</b> problem-solving to every project I work on.
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", opacity: "0.7" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
      <About />
      <Projects />
      <Experience />
      {/* <Footer /> */}
    </section>
  );
}

export default Home;
