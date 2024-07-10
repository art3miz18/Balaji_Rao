import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCameraVideo } from "react-icons/bs";

function ProjectCardsVideo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title style={{fontSize : "24px"}}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {props.description}
          </Card.Text>
          {"\n"}
          {"\n"}
          <Button
              variant="primary"
              onClick={handleShow}
              style={{ marginLeft: "10px" }}
            >
              <BsCameraVideo /> &nbsp;
              {"Video"}
            </Button>
          {/* <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button> */}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {/* {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ marginLeft: "10px" }}
            >
              <BsCameraVideo /> &nbsp;
              {"Video"}
            </Button>
          )} */}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="xl" centered className="fullscreen-modal">
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <div className="video-container">
            <iframe
              src={props.demoLink}
              title={props.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCardsVideo;
