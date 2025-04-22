import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
          I'm <span className="primary-header">Venu Varma</span>, a recent graduate from Siddharth Institute of Engineering and Technology, where I earned my Bachelor's degree in Computer Science and Engineering (Artificial Intelligence and Machine Learning).
          With a strong passion for development, I am eager to apply my skills and knowledge to innovative projects in web and software development.
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
