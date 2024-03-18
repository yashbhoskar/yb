import React from "react";
import { Col, Row } from "react-bootstrap";
import { Tooltip as ReactTooltip } from "react-tooltip";

import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiAngularjs,
} from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "20px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-2">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-9">
        <TbApi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-3">
        <SiAngularjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-1">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-8">
      <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-4">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-5">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-6">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip-id="my-tooltip-techstack-7">
        <DiMongodb />
      </Col>

      <ReactTooltip
        id="my-tooltip-techstack-1"
        place="top"
        content="React Js"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-techstack-2"
        place="top"
        content="Python"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-techstack-3"
        place="top"
        content="AngularJS"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-techstack-4"
        place="top"
        content="JavaScript"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-techstack-5"
        place="top"
        content="Java"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-techstack-6"
        place="top"
        content="SQL"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-techstack-7"
        place="top"
        content="Mongodb"
        variant="primary"
      />
      <ReactTooltip
        id="my-tooltip-techstack-8"
        place="top"
        content="Express JS"
        variant="primary"
      />

    </Row>
  );
}

export default Techstack;
