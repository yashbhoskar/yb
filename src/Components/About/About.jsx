import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/Avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";


function About() {

  const currentDate = new Date();
  const joinDate = new Date('June 1, 2023');

  // let differenceYears = joinDate.getFullYear() - currentDate.getFullYear();
  let differenceMonths = joinDate.getMonth() - currentDate.getMonth();
  console.log(differenceMonths);

  return (
    <Container fluid className="about-section">
      {/* <NavBar /> */}
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
          {/* <Row> */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple"> AM </span> i ?
            </h1>
            <p className="home-about-body">
              With <b className="purple"> comprehensive </b> experience in web application development,
              <br />
              <br />
              I have honed my skills in both <b className="purple">frontend and backend development. </b>
              <br />
              <br />
              In <b className="purple">addition </b> to my hands-on experience in web development, my education
              <br />
              has also played a critical role in providing a <b className="purple"> strong foundation </b> for my career.
              {/* I fell in love with programming and I have at least learnt
                    something, I think… 🤷‍♂️
                    <br />
                    <br />I am fluent in classics like
                    <i>
                      <b className="purple">
                        {" "}
                        Python, Java, Oracle Sql/PLSQL, Reactjs, Angular{" "}
                      </b>
                    </i>
                    <br />
                    <br />
                    My field of Interest's are building new &nbsp;
                    <i>
                      <b className="purple">Web Technologies and Products </b>
                    </i>
                    <br />
                    <br />
                    Passionate about implementing and launching new initiatives.
                    <i>
                      <b className="purple">
                        {" "}
                        I am eager to contribute my skills to an organization at
                        the
                      </b>
                    </i>
                    &nbsp;
                    <i>
                      <b className="purple">
                        {" "}
                        forefront of the exciting field of technology.
                      </b>
                    </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yashbhoskar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yashbhoskar31/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/qr/VXCYDKDPNQ73J1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:yashbhoskar01@gmail.com"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdOutlineAlternateEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__yyaasshh__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          {/* </Row>
            </Container>
          </Container> */}
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
      {/* <Footer /> */}
    </Container>
  );
}

export default About;
