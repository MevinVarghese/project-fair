import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import { allProjectAPI } from "../services/allAPI";

const Projects = () => {
  const [searchKey, setsearchKey] = useState("");
  const [allProjects, setAllProjects] = useState([]);

  // console.log(allProjects);

  useEffect(() => {
    getAllProjects();
  }, [searchKey]);
  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      //api call
      try {
        const result = await allProjectAPI(searchKey, reqHeader);
        // console.log(result);
        if (result.status == 200) {
          setAllProjects(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: "150px" }} className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1>All Projects</h1>
          <input
            onChange={(e) => setsearchKey(e.target.value)}
            type="text"
            className="form-control w-25"
            placeholder="Search Projects By Language Used"
          />
        </div>
        <Row className="mt-3">
          {allProjects?.length > 0 ? (
            allProjects?.map((project) => (
              <Col key={project?._id} className="mb-3" sm={12} md={6} lg={4}>
                <ProjectCard displayData={project} />
              </Col>
            ))
          ) : (
            <div className="fw-bolder text-danger m-5 text-center">
              Project Not Found!!!
            </div>
          )}
        </Row>
      </div>
    </>
  );
};

export default Projects;
