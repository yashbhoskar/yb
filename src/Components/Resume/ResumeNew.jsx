import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Particle from "../Particle";
import pdf from "../../Assets/Yash.Bhoskar_Resume_MAR2014.pdf";
// Yash.Bhoskar_Resume_MAR2014.pdf
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { GoZoomIn } from "react-icons/go";
import { GoZoomOut } from "react-icons/go";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(200);
  const [scale, setScale] = useState(0.8);

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    setScale(scale - 0.1);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <NavBar /> */}
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col sm={2}>
            <Button
              variant="primary"
              href={pdf}
              size="sm"
              target="_blank"
              className="m-3"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
            </Button>
          </Col>
          <Col sm={2} className="d-flex" style={{ justifyContent: "flex-end"}}>
            <ButtonGroup size="sm">
              <Button variant="secondary" size="sm" onClick={zoomIn} className="mt-3 mb-3"><GoZoomIn /></Button>
              <Button variant="secondary" size="sm" onClick={zoomOut} className="mt-3 mb-3"><GoZoomOut /></Button>
            </ButtonGroup>
          </Col>
        </Row>

        <Row className="resume-page">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? scale : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="m-3"
            style={{ maxWidth: "140px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download
          </Button>
        </Row>
        {/* <Footer /> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
