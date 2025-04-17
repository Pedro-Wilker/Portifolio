import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Projects: React.FC = () => {
  const projects = [
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img1.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img2.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img3.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img4.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img5.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img6.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img7.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img8.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img9.png" },
    { title: "Business Startup", description: "Design & Development", imgUrl: "/assets/img/project-img10.png" },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Estes são alguns dos projetos que realizei. Se desejar ver mais, por favor, visite o meu GitHub.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Image src="/assets/img/color-sharp2.png" alt="" className="background-image-right" width={350} height={350} />
    </section>
  );
};

export default Projects;