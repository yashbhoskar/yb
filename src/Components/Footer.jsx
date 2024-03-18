import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed with <FaHeart style={{ color: "red" }} /> by Yash</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Yb.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/yashbhoskar"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yashbhoskar31/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/qr/VXCYDKDPNQ73J1"
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
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
              >
                <MdOutlineAlternateEmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/__yyaasshh__/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
