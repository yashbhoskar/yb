import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/yb-logo.png";
import { Link } from "react-router-dom";
// import { ImBlog } from "react-icons/im";
import Tour from "reactour";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser
} from "react-icons/ai";

import { CgFileDocument, CgWorkAlt, CgTerminal } from "react-icons/cg";
const TransparentMask = styled.div`
  background-color: rgba(
    255,
    255,
    255,
    0.3
  ); /* Adjust the alpha (fourth value) to control transparency */
`;

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const [isTourOpen, setIsTourOpen] = useState(false);

  const steps = [
    {
      selector: ".terminal",
      content: "Have a look the therminal themed portfolio.",
    },
    // Add more steps as needed
  ];

  useEffect(() => {
    // Check if the tour has already been shown
    const hasTourBeenShown = localStorage.getItem("hasTourBeenShown");

    // If the tour hasn't been shown, open it and mark it as shown
    if (!hasTourBeenShown) {
      setIsTourOpen(true);
      localStorage.setItem("hasTourBeenShown", "true");
    }
  }, []);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/home"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> Who am i?
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/experience"
                  onClick={() => updateExpanded(false)}
                >
                  <CgWorkAlt style={{ marginBottom: "2px" }} /> Experience
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://yashbhoskar.github.io/yb.Terminal/"
                  target="_blank"
                  rel="noreferrer"
                  className="terminal"
                >
                  <CgTerminal style={{ marginBottom: "2px" }} /> Terminal
                </Nav.Link>
              </Nav.Item>

              {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

              {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
        maskClassName="custom-mask-class" // This class will be applied to the tour modal mask
        maskSpace={10} // Adjust the space around the mask if needed
        closeWithMask={false} // Prevent closing the tour by clicking on the mask
        lastStepNextButton={<button>Finish</button>} // Customize the last step's next button
        maskComponent={TransparentMask} // Use the custom styled component for the mask
      />
    </>
  );
}

export default NavBar;
