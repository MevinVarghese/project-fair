import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import SERVERURL from "../services/serverurl";

const ProjectCard = ({ displayData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className="shadow btn">
        <Card.Img
          variant="top"
          height={"200px"}
          src={`${SERVERURL}/uploads/${displayData?.projectImg}`}
        />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={`${SERVERURL}/uploads/${displayData?.projectImg}`}
                alt="title"
              />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h6>
                <span className="fw-bolder">Language Used :</span>
                <span className="text-danger"> {displayData?.languages}.</span>
              </h6>
              <p style={{ textAlign: "justify" }}>
                <span className="fw-bolder">Project Overview :</span>
                {displayData?.overview}.
              </p>
            </div>
          </div>
          <div className="float-start mt-2">
            <a
              href={displayData?.github}
              target="_blank"
              className="btn btn-secondary"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={displayData?.website}
              target="_blank"
              className="btn btn-secondary ms-2"
            >
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
