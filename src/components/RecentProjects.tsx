import { useState } from 'react';
import { Container, Row, Col, Nav, Modal, Button } from 'react-bootstrap';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img.png';
import projImg2 from '../assets/img/project-img(2).png';
import projImg3 from '../assets/img/project-img(3).png';
import projImg4 from '../assets/img/project-img(4).png';
import projImg5 from '../assets/img/project-img(5).png';
import projImg6 from '../assets/img/project-img(6).png';
import projImg7 from '../assets/img/project-img(7).png';
import projImg8 from '../assets/img/project-img(8).png';
import projImg9 from '../assets/img/project-img(9).png';
import projImg10 from '../assets/img/project-img(10).png';
import { JSX } from 'react/jsx-runtime';

export const RecentProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showModal, setShowModal] = useState<boolean>(false);
  interface Project {
    id: number;
    category: string;
    title: string;
    img: string;
    tag: string;
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    { id: 1, category: 'uiux', title: 'Mata Mosquito', img: projImg1, tag: 'UI/UX' },
    { id: 2, category: 'brand', title: 'Camaleão dos Sabores', img: projImg2, tag: 'Brand Identity & Marketing' },
    { id: 3, category: 'brand', title: 'Gestão Animal', img: projImg3, tag: 'Brand Identity & Marketing' },
    { id: 4, category: 'graphic', title: 'Business Card Mockup', img: projImg4, tag: 'Graphic' },
    { id: 5, category: 'uiux', title: 'Snapdeal', img: projImg5, tag: 'UI/UX' },
    { id: 6, category: 'graphic', title: 'Illustration', img: projImg6, tag: 'Graphic' },
    { id: 7, category: 'uiux', title: 'HDFC Bank', img: projImg7, tag: 'UI/UX' },
    { id: 8, category: 'uiux', title: 'Scoot', img: projImg8, tag: 'UI/UX' },
    { id: 9, category: 'uiux', title: 'Paired Pixel', img: projImg9, tag: 'UI/UX' },
    { id: 10, category: 'video', title: 'Video Project', img: projImg10, tag: 'Video Editing' },
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);

  const projectDetails: Record<string, { images: string[]; description: JSX.Element }> = {
    'Mata Mosquito': {
      images: [
        'https://user-images.githubusercontent.com/81252209/215091214-3a0895c0-001b-4132-9d8b-dc0ddcbc5df6.png',
        'https://user-images.githubusercontent.com/81252209/215186861-90e99c61-c4b8-42f3-8daf-c3ce49c3c1da.png',
        'https://user-images.githubusercontent.com/81252209/215187473-c3e1170f-180f-4707-9085-037350be1bac.png',
      ],
      description: (
        <>
          <h2>"Mata Mosquito"</h2>
          <h4>Game developed in pure JavaScript. The game kills the fly, is an interactive game with the objective of killing "mosquitoes" to capture points</h4>
          <hr />
          <h2>How to start the game?</h2>
          <h4>It's very simple, follow this step by step:</h4>
          <h6>Note: As the game is not running on any type of host, it is necessary to use an IDE (ex: VS CODE) to be able to play.</h6>
          <ol>
            <li>Copy the repository link and clone it in a local folder or download the repository as .zip</li>
            <li>Open the repository in an IDE or integrated development environment, example: VS Code</li>
            <li>Open the index.html page or use the VS Code: Live Server extension</li>
            <li>Be happy friend!</li>
          </ol>
          <h4>There is also an easier way to get started:</h4>
          <ol>
            <li>Open git codespace</li>
            <p style={{ textAlign: 'center' }}>
              <img width="390px" src="https://user-images.githubusercontent.com/81252209/215186861-90e99c61-c4b8-42f3-8daf-c3ce49c3c1da.png" alt="codespace" />
              <h6>Select "sturdy basson". You will be redirected to the codespacing page</h6>
            </p>
            <li>Right-click on the "index.html" file and select the open with live server option</li>
            <p style={{ textAlign: 'center' }}>
              <img width="390px" src="https://user-images.githubusercontent.com/81252209/215187473-c3e1170f-180f-4707-9085-037350be1bac.png" alt="live server" />
              <h6>Now Start the game</h6>
            </p>
          </ol>
          <h2>What was used in the project</h2>
          <h4>Language</h4>
          <ul>
            <li>JavaScript</li>
          </ul>
          <h4>Library</h4>
          <ul>
            <li>BootStrap</li>
          </ul>
          <h4>More</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </>
      ),
    },
    // Adicione mais projetos conforme necessário
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className="recent-projects" id="projects">
      <Container>
        <h2 className="section-title">Recent Projects</h2>
        <Nav variant="pills" className="project-tabs justify-content-center mb-5">
          <Nav.Item>
            <Nav.Link
              eventKey="all"
              active={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
            >
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="uiux"
              active={activeTab === 'uiux'}
              onClick={() => setActiveTab('uiux')}
            >
              UI/UX
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="graphic"
              active={activeTab === 'graphic'}
              onClick={() => setActiveTab('graphic')}
            >
              Graphic
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="brand"
              active={activeTab === 'brand'}
              onClick={() => setActiveTab('brand')}
            >
              Brand Identity & Marketing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="3dmodel"
              active={activeTab === '3dmodel'}
              onClick={() => setActiveTab('3dmodel')}
            >
              3D Modelling
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="video"
              active={activeTab === 'video'}
              onClick={() => setActiveTab('video')}
            >
              Video Editing
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          {filteredProjects.map((project) => (
            <Col md={4} sm={6} key={project.id} className="mb-4">
              <div className="project-card" onClick={() => handleProjectClick(project)}>
                <div className="project-img-wrapper">
                  <img src={project.img} alt={project.title} className="project-img" />
                  <span className="project-tag">{project.tag}</span>
                </div>
                <h4 className="project-title">{project.title}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              {selectedProject && projectDetails[selectedProject.title]?.description}
          <>
            <div className="modal-images">
              {selectedProject && projectDetails[selectedProject.title]?.images.map((img: string, index: number) => (
                <img key={index} src={img} alt={`Project ${index}`} className="modal-image" />
              ))}
            </div>
            <div className="modal-description">
              {selectedProject && projectDetails[selectedProject.title]?.description}
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};