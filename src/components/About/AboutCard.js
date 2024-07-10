import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Balaji Rao </span>
            from <span className="purple"> Gurugram, India.</span>
            <br />
            I am currently employed as a software developer.
            <br />
            I have completed B.Tech in C.S.E and  Diploma in Game Art and Design. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every day is a new opportunity to grow and improve. Strive to be better than you were yesterday."{" "}
          </p>
          <footer className="blockquote-footer">Balaji Rao</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
