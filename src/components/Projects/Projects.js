import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projectsData = [
  {
    projectId: 1,
    projectName: "Calorie Calculator",
    description:
      "This is an Angular project that I developed during my second summer internship in PiA. With this web application, the total amount of calories and nutirtional values of the selected foods can be calculated.",
    longDescription: "",
    images: ["calorie-calculator1.png"],
    githubLink: "",
    demoLink: "https://github.com/kasimselimhanbaltas/calorie-calculator",
  },
  {
    projectId: 2,
    projectName: "Baltaş Auto Gallery",
    description:
      "This web project is a car gallery which contains 2700+ car models and 65000+ images. I developed this project with SpringBoot, PostgreSQL and VueJS.",
    longDescription:
      "This is my favorite project that I have completed and periodically made improvements on. While researching data for the backend of this project, I signed up for a website and obtained a CSV file with approximately 70,000 car records. Using Python, I created a table from this CSV file. The data in this table was very complex, so I used normalization techniques to create 7 tables from 1 and removed some unnecessary columns. With the Selenium module in Python, I saved approximately 10 images for each car from Google Images, totaling more than 65,000 images into my Postgres database. Initially, I used Python's pyautogui module for this image-saving process, but Selenium's ability to run in the background saved me a lot of time.",
    images: ["c11.png", "c12.png", "c13.png", "c14.png", "c15.png"],
    githubLink: "https://github.com/kasimselimhanbaltas/baltas-auto-gallery",
  },
  {
    projectId: 3,
    projectName: "Car Gallery Management System",
    description:
      "This project is an enhanced version of the Auto Gallery project, with an improved database. Additionally, I designed a system for a car dealership and its dealers. I added many functions, such as adding and removing dealers, buying and selling cars, saving customers datas, hiring or firing employees, and more.",
    longDescription:
      "This project is an enhanced version of the Auto Gallery project, with an improved database. Additionally, I designed a system for a car dealership and its dealers. I added many functions, such as adding and removing dealers, buying and selling cars, saving customers datas, hiring or firing employees, and more. To save a car, I created a registration screen using the car data I prepared in my previous project. When selecting a car model to register, default values are automatically filled in, and the fields that need to be changed (such as repair history or mileage for a second hand car) can be edited, speeding up the process.",
    images: ["cc1.png", "cc2.png", "cc3.png", "cc4.png", "cc5.png", "cc6.png"],
    githubLink: "https://github.com/kasimselimhanbaltas/AutoGalleryDb",
  },
  {
    projectId: 4,
    projectName: "Earth Info",
    description:
      "This is the first web project I finished. During my first internship, I developed a full-stack web application about countries, states and cities, then fully dockerized the project. I published all of the images on Docker Hub. Lastly, I created a docker-compose file to run all the images as containers that are connected to each other via appropriate ports.",
    longDescription:
      "This is the first web project I finished. During my first internship, I learned a lot. I developed a full-stack web application and then fully dockerized the project. Initially, I created a database dump file and restored my local database inside the Postgres container. After that, I created a Postgres image. I also generated a JAR file with Maven wrapper for my backend and then used it to create a Java image. Finally, I built my Vue.js project using npm and created a Node.js image. I published all of these images on Docker Hub. Lastly, I created a docker-compose file to run all the images as containers that are connected to each other via appropriate ports.",
    images: ["ei1.png", "ei2.png"],
    githubLink: "https://github.com/kasimselimhanbaltas/Earth-Info/",
  },
  {
    projectId: 5,
    projectName: "Visual Exploration Assistant",
    description:
      "This project is a mobile application that my two friends and I developed during our Introduction to \
      Artificial Intelligence lecture in school. Using a deep learning model that covers certain objects in our campus,\
       the app is designed to help visually impaired people by identifying and providing information on the objects they encounter\
        while walking, such as their type, direction, and distance.",
    longDescription:
      "This project is a mobile application that my two friends and I developed during our Introduction to \
      Artificial Intelligence course in school. Using an artificial intelligence model that covers certain objects in our campus,\
       the app is designed to help visually impaired people by identifying and providing information on the objects they encounter\
        while walking, such as their type, direction, and distance. To prepare the dataset for this project, we took a total of 2139\
         photos of objects in our school, such as doors, banks, and stairs, and manually labeled them for higher accuracy. We then integrated the labeled photos into our mobile application. To maximize the output of our model, we used the label location and size when an object is detected to provide more detailed guidance to visually impaired users.",
    images: ["bg1.png", "bg2.png", "bg3.png", "bg4.png"],
    githubLink:
      "https://github.com/kasimselimhanbaltas/Visual-Exploration-Assistant",
  },
];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function Projects() {
  const images = importAll(
    require.context(
      "../../Assets/img/projectimages/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
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
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={images[project.images[0]]}
                isBlog={false}
                title={project.projectName}
                description={project.description}
                ghLink={project.githubLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
