import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaArtstation } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {/* I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ */}
              I have a passion for programming and continuously strive to learn new things.
              <br />
              <br />I specialize in areas like
              <i>
                <b className="purple"> Augmented Reality (AR) and Virtual Reality (VR).</b>
              </i>
              <br />
              <br />
              My fields of interest include developing innovative&nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and exploring the potential of{" "}
                <b className="purple">
                  Artificial Intelligence and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              I am dedicated to advancing my skills in <b className="purple">Artificial Intelligence</b> and
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, focusing on technologies such as Large Language Models (LLMs) and Generative Adversarial Networks (GANs).
                </b>
              </i>
              {/* &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
              <br />
              <br />
              I also apply my passion for developing innovative web experiences using <b className="purple">WebXR</b> and
              <i>
                <b className="purple">
                  {" "}
                  immersive 3D graphics with Three.js.
                </b>
              </i>
              <br />
              <br />
              In addition, I have a strong foundation in
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/art3miz18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.artstation.com/art3miz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaArtstation />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/balaji-rao-/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/art3miz__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
