import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectVideoCards";
import Particle from "../Particle";
import artgallery from "../../Assets/Projects/ArtGallery.webp";
import bridgestone from "../../Assets/Projects/Bridgestone.webp";
import skyverseCity from "../../Assets/Projects/SkyverseCity.webp";
import skyverseMall from "../../Assets/Projects/SkyverseMall.webp";
import theatre from "../../Assets/Projects/TheatreSkyverse.webp";
import bank from "../../Assets/Projects/VirtualBank.webp";
import eternity from "../../Assets/Projects/VirtualCity.webp";
import gamezone from "../../Assets/Projects/VirtualGamezone.webp";
import mall from "../../Assets/Projects/VirtualMall.webp";
import temple from "../../Assets/Projects/VirtualTemple.webp";
import WolvesNight from "../../Assets/Projects/WolvesNight.webp";

function ProjectsVideos() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {/* Virtual Game Zone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamezone}              
              title="Virtual Game zone"
              description="A virtual Game zone with a beautiful environment where users can interact and play a few games (basket Ball, Spin wheel, Tile flip) some of these games were integrated 2D games made using sprites.
The game zone served as an entertainment point of view for users to play games and get rewards based on score."            
              demoLink="https://www.youtube.com/embed/zTeT-nAKydA"
            />
          </Col>

            {/* Virtual Bank */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}              
              title="Virtual Bank"
              description="AI-powered virtual bank with a Pre-trained Data model to talk about the specified banking service, An in-house API integration to view PAN details of the user 
                            the virtual assistant that can help users navigate through basic user queries,  until the user has specific queries which can only be transcribed by an actual Bank representative 

                            this project was made in unity and all the 3D models were modeled based on specifications 
                            works on targeting platforms and optimized for (VR [Meta Quest 2], WebGL, Android, and IOS)."            
              demoLink="https://www.youtube.com/embed/xVEKW_hDEX4"
            />
          </Col>

            {/* Virtual City */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eternity}              
              title="Virtual City"
              description="Eternity City is a open world city  where users can roam and interact with each other and do fun activities together, This project was a proof of concept for a metaverse project."            
              demoLink="https://www.youtube.com/embed/53xGPMZ7b2Q"
            />
          </Col>


            {/* Virtual Temple (Rammandir Ayodhya) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temple}              
              title="Virtual Temple (Ram Mandir Ayodhya)"
              description="A Virtual Temple created for users to view the beauty of Ram Mandir in Ayodhya, with a few features integrated as AI transcription of the Bhagwad Gita and the History of Ram Mandir this project was Proof Of Concept for Spirituality meets technology 
the main goal of this project was to make the user use VR and experience the beauty of Ram Mandir at their own convenience of leaving the bedroom."            
              demoLink="https://www.youtube.com/embed/Q7zO3WxFZpw"
            />
          </Col>


            {/* Virtual Mall */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mall}              
              title="Virtual Mall"
              description="This was a Virtual Mall with free-roaming capability for users to perform various actions like visiting stores, talking to other multiplayer contestants, and expressing fun in emotes and actions...
                            this is a demo video showcasing limited functionalities."            
              demoLink="https://www.youtube.com/embed/u2maBo0jXgk"
            />
          </Col>

          
            {/* ArtGallery */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artgallery}
              title="Artgallery"
              description="a Unity-powered virtual gallery featuring multiplayer networking, voice chat, and cross-platform compatibility. Explore stunning artworks with friends in an immersive and interactive environment. Ideal for showcasing cutting-edge game development skills."              
              demoLink="https://www.youtube.com/embed/3iDXWC_sc3w"
            />
          </Col>

            {/* Bridgestone VR  */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bridgestone}
              title="Bridgestone VR"
              description="Discover the Bridgestone Sturdo Tyre like never before with our interactive,
               custom-rendered visualization. Experience every feature of this advanced tyre in stunning detail,
                optimized for standalone VR on Meta Quest 2. Dive into a fully immersive environment to explore its durability,
                 performance, and cutting-edge technology, all designed to enhance your driving experience."              
              demoLink="https://www.youtube.com/embed/kx9oC1dfowU"
            />
          </Col>


            {/* Skyverse Shopping Mall */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skyverseMall}
              title="Sky Shopping Mall"
              description="Explore SkyShopping Mall, a Unity-powered virtual mall featuring multiplayer networking, voice chat, 
              and cross-platform compatibility. Shop and socialize with friends in an immersive, interactive environment. 
              Optimized for a seamless experience, this project showcases advanced game development skills and innovative design. 
              Dive into the future of virtual shopping with SkyShopping Mall!"              
              demoLink="https://www.youtube.com/embed/TfJWVRZLjEQ"
              
            />
          </Col>


            {/* Skyverse City */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skyverseCity}
              title="Skyverse City"
              description="Welcome to Skyverse City, a Unity-powered virtual city where people can meet and greet. Featuring multiplayer networking,
               voice chat, and fun emoticons/taunts, this interactive environment offers a seamless, cross-platform experience.
                Explore and connect like never before!"              
              demoLink="https://www.youtube.com/embed/kQU0eOvyoqA"
            />
          </Col>


            {/* Skyverse Theatre */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theatre}
              title="Skyverse Theatre"
              description="Welcome to Skyverse Theatre, a Unity-powered VR space where you can stream movies, watch cricket matches, 
              and enjoy video content with friends. Featuring multiplayer networking, voice chat, and an immersive environment,
               this theatre lets you feel the presence of others, no matter where you are.
                Experience the future of social viewing with Skyverse Theatre!"              
              demoLink="https://www.youtube.com/embed/YDzV0VNqWlU"
            />
          </Col>


            {/* Wolves Night */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WolvesNight}
              title="Wolves Night - Virtual DJ arena"
              description="Welcome to Virtual DJ Arena, a Unity-powered event space where DJs can play live sets and users can join from anywhere. 
              Experience the music in VR and other devices, featuring multiplayer networking and voice chat for a fully immersive and interactive event. 
              Enjoy live performances and connect with friends in the ultimate virtual concert experience!"              
              demoLink="https://www.youtube.com/embed/xFFO9b6-Fts"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsVideos;
