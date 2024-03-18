import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";

function ProjectCards(props) {
  // const companyI = "Automaton AI Infosystem";
  const [expanded, setExpanded ] = useState(false);
  const maxTextLength = 250;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  const renderedDescription = () => {
    if (props.description.length <= maxTextLength || expanded){
      return props.description
    } else {
      return props.description.slice(0, maxTextLength) + "...";
    }
  };

  const renderReadMoreButton = () => {
    if (props.description.length > maxTextLength) {
      return (
        <span onClick={toggleExpanded} style={{ cursor: 'pointer', color: 'blue' }}>
          {expanded ? 'Read less' : 'Read more'}
        </span>
      );
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img className="card-img h-20" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
        {renderedDescription()} {renderReadMoreButton()}
        </Card.Text>
        <Card.Footer>
        {props.ghLink && (<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>)}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {!props.isBlog && !props.demoLink && !props.ghLink &&(
          <><p className="company-name"><FaRegCircleQuestion /> Project is associated with <b> organization </b></p></>
        )}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
