import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiUbuntu,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "18px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-1">
        {/* <SiMacos /> */}
        {/* <SiLinux /> */}
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-2">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-3">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-4">
        <SiSlack />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
      <ReactTooltip
        id="my-tooltip-1"
        place="top"
        content="Ubuntu 22.04"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-2"
        place="top"
        content="Visual Studio Code"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-3"
        place="top"
        content="Postman"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-4"
        place="top"
        content="Slack"
        variant="primary"
      />
    </Row>
  );
}

export default Toolstack;
