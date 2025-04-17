"use client"; // Adicione isso no topo

import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/assets/img/project-img1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/assets/img/project-img2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/assets/img/project-img3.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/assets/img/project-img4.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/assets/img/project-img5.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/assets/img/project-img6.png",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Projects</h2>
            <p>
              Aqui você pode visualizar alguns dos meus projetos, onde aplico
              minhas habilidades de desenvolvimento para criar soluções
              inovadoras e funcionais.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" id="projects-tabs-tab-first">
                    Tab 1
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" id="projects-tabs-tab-second">
                    Tab 2
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" id="projects-tabs-tab-third">
                    Tab 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.slice(0, 3).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(3, 6).map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Ainda não possuo projetos para esta aba, mas em breve
                    trarei mais novidades.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Image
        src="/assets/img/color-sharp2.png"
        alt=""
        className="background-image-right"
        width={400}
        height={400}
      />
    </section>
  );
};

export default Projects;