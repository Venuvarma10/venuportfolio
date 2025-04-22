import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/hackherosProj.png";
import Portfolio from "../../Assets/Projects/portfolio.png";
import Ecart from "../../Assets/Projects/ecommerceProj.png";
import ExpenseTracker from "../../Assets/Projects/shopProj.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Cart"
              description="This is a fully functional eCommerce website that uses React.js and CSS in the front end and Python and Django Rest Framework in backend and MySQL as Database."
              ghLink="https://github.com/Venuvarma10/EcommerceStore"
              demoLink="https://suvecommerce.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/Venuvarma10/venuportfolio"
              demoLink="#"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Echo-Fin AI"
              description="The app enables users to assess risk rate, priority, ESG score, compare expected vs. actual capital, and receive AI-driven recommendations to optimize their sustainable investments."
              ghLink="https://github.com/Venuvarma10/HackHeroes"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="Shops Status"
              description="A dynamic web application that allows users to check the real-time open/close status of various shops. Users can click on a specific shop to instantly view its current status based on the set operating hours. Shop owners have the ability to log in and manage their shop's status by updating opening and closing times as needed."
              ghLink="https://github.com/Venuvarma10/shopsProject"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
