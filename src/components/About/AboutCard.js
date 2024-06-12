import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">K. Selimhan Baltaş </span>
            from <span className="purple"> Istanbul/Türkiye.</span>
            <br />
            I have completed Computer Engineering at Marmara University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Kickboxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Violin
            </li>
          </ul>

          <footer className="blockquote-footer">Selimhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
