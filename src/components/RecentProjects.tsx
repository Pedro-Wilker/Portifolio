import { useState } from "react";
import { Container, Row, Col, Nav, Modal, Button } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img.png";
import projImg2 from "../assets/img/project-img(2).png";
import projImg3 from "../assets/img/project-img(3).png";
import projImg4 from "../assets/img/project-img(4).png";
import projImg5 from "../assets/img/project-img(5).png";
import projImg6 from "../assets/img/project-img(6).png";
import projImg7 from "../assets/img/project-img(7).png";
import projImg8 from "../assets/img/project-img(8).png";
import projImg9 from "../assets/img/project-img(9).png";
import projImg10 from "../assets/img/project-img(10).png";
import { JSX } from "react/jsx-runtime";

export const RecentProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
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
    // Fullstack Projects
    { id: 1, category: "fullstack", title: "Camaleão dos Sabores", img: projImg1, tag: "Fullstack" },
    { id: 2, category: "fullstack", title: "Gestão Animal", img: projImg2, tag: "Fullstack" },
    { id: 3, category: "fullstack", title: "Tens Oportunidades", img: projImg3, tag: "Fullstack" },

    // Frontend Projects
    { id: 4, category: "frontend", title: "Camaleão dos Sabores", img: projImg1, tag: "Frontend" },
    { id: 5, category: "frontend", title: "Gestão Animal", img: projImg2, tag: "Frontend" },
    { id: 6, category: "frontend", title: "Tens Oportunidades", img: projImg3, tag: "Frontend" },
    { id: 7, category: "frontend", title: "Finans", img: projImg4, tag: "Frontend" },
    { id: 8, category: "frontend", title: "TecBlog", img: projImg5, tag: "Frontend" },
    { id: 9, category: "frontend", title: "Jogo da Memória", img: projImg6, tag: "Frontend" },
    { id: 10, category: "frontend", title: "Game Mata Mosquito", img: projImg7, tag: "Frontend" },
    { id: 11, category: "frontend", title: "Mario Game", img: projImg8, tag: "Frontend" },
    { id: 12, category: "frontend", title: "Pokedex G1", img: projImg9, tag: "Frontend" },

    // Backend Projects
    { id: 13, category: "backend", title: "Camaleão dos Sabores", img: projImg1, tag: "Backend" },
    { id: 14, category: "backend", title: "Gestão Animal", img: projImg2, tag: "Backend" },
    { id: 15, category: "backend", title: "Tens Oportunidades", img: projImg3, tag: "Backend" },
  ];

  const getFilteredProjects = () => {
    if (activeTab !== "all") {
      return projects.filter((project) => project.category === activeTab);
    } else {
      const seenTitles = new Set<string>();
      const filtered: Project[] = [];
      projects.forEach((project) => {
        if (project.category === "fullstack" && !seenTitles.has(project.title)) {
          filtered.push(project);
          seenTitles.add(project.title);
        }
      });
      projects.forEach((project) => {
        if (project.category !== "fullstack" && !seenTitles.has(project.title)) {
          filtered.push(project);
          seenTitles.add(project.title);
        }
      });
      return filtered;
    }
  };

  const filteredProjects = getFilteredProjects();

  const projectDetails: Record<string, { images: string[]; description: JSX.Element }> = {
    "Camaleão dos Sabores_fullstack": {
      images: [projImg1, projImg2, projImg3],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg1} alt="Camaleão dos Sabores 1" className="modal-image-centered" />
            <h6>Main interface of Camaleão dos Sabores</h6>
          </div>
          <hr />
          <h2>"Camaleão dos Sabores"</h2>
          <h4>
            A fullstack project developed for the management of restaurants and hotels, specifically for Bauneario Camaleão das Folhagens, which operates as both a restaurant and a hotel.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            This application streamlines the management of restaurant and hotel operations, including inventory, reservations, and customer management. The frontend was built with NextJS for a seamless user experience, while the backend leverages Node.js for robust API development and data handling.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>NextJS</li>
          </ul>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
          </ul>
          <h4>More</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </>
      ),
    },
    "Gestão Animal_fullstack": {
      images: [projImg2, projImg3, projImg4],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg2} alt="Gestão Animal 1" className="modal-image-centered" />
            <h6>Main interface of Gestão Animal</h6>
          </div>
          <hr />
          <h2>"Gestão Animal"</h2>
          <h4>
            A personal fullstack project designed for farm management, catering to both large and small-scale producers. Currently in development.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Gestão Animal aims to simplify farm management by providing tools for tracking livestock, managing resources, and monitoring production. The frontend is built with NextJS, ensuring a modern and responsive interface, while the backend uses Node.js for efficient data processing and storage.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>NextJS</li>
          </ul>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
          </ul>
          <h4>More</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </>
      ),
    },
    "Tens Oportunidades_fullstack": {
      images: [projImg3, projImg4, projImg5],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg3} alt="Tens Oportunidades 1" className="modal-image-centered" />
            <h6>Main interface of Tens Oportunidades</h6>
          </div>
          <hr />
          <h2>"Tens Oportunidades"</h2>
          <h4>
            A fullstack project developed in collaboration with the councilwoman of Tapiramutá, Manuela, to help service providers and clients in the region connect through a platform that allows free publication of services.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Tens Oportunidades empowers local businesses and service providers by offering a platform to advertise their services for free, increasing their visibility and client reach. The frontend was developed with NextJS for a smooth user experience, and the backend uses Node.js to handle data and user interactions. Visit the site at: <a href="http://tensoportunidades.com.br/" target="_blank" rel="noopener noreferrer">tensoportunidades.com.br</a>.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>NextJS</li>
          </ul>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
          </ul>
          <h4>More</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </>
      ),
    },
    "Camaleão dos Sabores_frontend": {
      images: [projImg1, projImg2, projImg3],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg1} alt="Camaleão dos Sabores 1" className="modal-image-centered" />
            <h6>Main interface of Camaleão dos Sabores</h6>
          </div>
          <hr />
          <h2>"Camaleão dos Sabores"</h2>
          <h4>
            A frontend project for the management of restaurants and hotels, specifically for Bauneario Camaleão das Folhagens, which operates as both a restaurant and a hotel.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            This frontend application provides an intuitive interface for managing restaurant and hotel operations, focusing on user experience and responsiveness. It was built with NextJS to ensure a fast and modern interface.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>NextJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </>
      ),
    },
    "Gestão Animal_frontend": {
      images: [projImg2, projImg3, projImg4],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg2} alt="Gestão Animal 1" className="modal-image-centered" />
            <h6>Main interface of Gestão Animal</h6>
          </div>
          <hr />
          <h2>"Gestão Animal"</h2>
          <h4>
            A personal frontend project designed for farm management, catering to both large and small-scale producers. Currently in development.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Gestão Animal provides a user-friendly interface for farm management, allowing users to track livestock and manage resources efficiently. The frontend was developed using NextJS to ensure a modern and responsive design.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>NextJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </>
      ),
    },
    "Tens Oportunidades_frontend": {
      images: [projImg3, projImg4, projImg5],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg3} alt="Tens Oportunidades 1" className="modal-image-centered" />
            <h6>Main interface of Tens Oportunidades</h6>
          </div>
          <hr />
          <h2>"Tens Oportunidades"</h2>
          <h4>
            A frontend project developed in collaboration with the councilwoman of Tapiramutá, Manuela, to help service providers and clients in the region connect through a platform that allows free publication of services.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Tens Oportunidades offers a clean and intuitive frontend for users to browse and publish services, enhancing local business visibility. The interface was built with NextJS for optimal performance and user experience. Visit the site at: <a href="http://tensoportunidades.com.br/" target="_blank" rel="noopener noreferrer">tensoportunidades.com.br</a>.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>NextJS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </>
      ),
    },
    "Finans": {
      images: [projImg4, projImg5, projImg6],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg4} alt="Finans 1" className="modal-image-centered" />
            <h6>Main landing page of Finans</h6>
          </div>
          <hr />
          <h2>"Finans"</h2>
          <h4>
            A sample landing page created as a template for future digital product sales landing pages.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Finans serves as an example of a clean and effective landing page for digital products, focusing on conversion and user engagement. It was developed using vanilla JavaScript, HTML, and CSS to keep it lightweight and accessible. Check it out at: <a href="https://pedro-wilker.github.io/Finans/" target="_blank" rel="noopener noreferrer">pedro-wilker.github.io/Finans</a>.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </>
      ),
    },
    "TecBlog": {
      images: [projImg5, projImg6, projImg7],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg5} alt="TecBlog 1" className="modal-image-centered" />
            <h6>Main page of TecBlog</h6>
          </div>
          <hr />
          <h2>"TecBlog"</h2>
          <h4>
            A sample blog site created to demonstrate how blogs can be built for clients, news sites, or personal projects.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            TecBlog showcases a simple yet effective blog layout, ideal for news sites or personal blogs. It was developed using vanilla JavaScript, HTML, and CSS to ensure flexibility and ease of customization. Check it out at: <a href="https://pedro-wilker.github.io/tecblog/" target="_blank" rel="noopener noreferrer">pedro-wilker.github.io/tecblog</a>.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </>
      ),
    },
    "Jogo da Memória": {
      images: [projImg6, projImg7, projImg8],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg6} alt="Jogo da Memória 1" className="modal-image-centered" />
            <h6>Main game interface of Jogo da Memória</h6>
          </div>
          <hr />
          <h2>"Jogo da Memória"</h2>
          <h4>
            An interactive memory game created for training and learning frontend development techniques.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Jogo da Memória is a fun and interactive game designed to test memory skills while serving as a learning project for frontend development. It was built using vanilla JavaScript, HTML, and CSS to practice DOM manipulation and event handling. Play it at: <a href="https://pedro-wilker.github.io/Jogo-da-Memoria/" target="_blank" rel="noopener noreferrer">pedro-wilker.github.io/Jogo-da-Memoria</a>.
          </h4>
          <hr />
          <h2>How to Start the Game?</h2>
          <h4>Follow these steps to play:</h4>
          <h6>Note: As the game is not hosted, you’ll need an IDE (e.g., VS Code) to run it locally.</h6>
          <ol>
            <li>Clone the repository or download it as a .zip file.</li>
            <li>Open the repository in an IDE like VS Code.</li>
            <li>Open the <code>index.html</code> file or use the VS Code Live Server extension.</li>
            <li>Enjoy the game!</li>
          </ol>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </>
      ),
    },
    "Game Mata Mosquito": {
      images: [projImg7, projImg8, projImg9],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg7} alt="Game Mata Mosquito 1" className="modal-image-centered" />
            <h6>Main game interface of Game Mata Mosquito</h6>
          </div>
          <hr />
          <h2>"Game Mata Mosquito"</h2>
          <h4>
            An interactive game created for training and learning frontend development techniques.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Game Mata Mosquito challenges players to "kill" mosquitoes to earn points, providing a fun way to practice frontend skills like animations and game logic. It was developed using vanilla JavaScript, HTML, and CSS. Play it at: <a href="https://pedro-wilker.github.io/Jogo-da-Memoria/" target="_blank" rel="noopener noreferrer">pedro-wilker.github.io/Jogo-da-Memoria</a>.
          </h4>
          <hr />
          <h2>How to Start the Game?</h2>
          <h4>Follow these steps to play:</h4>
          <h6>Note: As the game is not hosted, you’ll need an IDE (e.g., VS Code) to run it locally.</h6>
          <ol>
            <li>Clone the repository or download it as a .zip file.</li>
            <li>Open the repository in an IDE like VS Code.</li>
            <li>Open the <code>index.html</code> file or use the VS Code Live Server extension.</li>
            <li>Enjoy the game!</li>
          </ol>
          <h4>Alternative Method:</h4>
          <ol>
            <li>Open the project in GitHub Codespaces.</li>
            <div className="modal-image-wrapper">
              <img src={projImg8} alt="Codespaces Step" className="modal-image-centered" />
              <h6>Select "sturdy basson" to open the Codespaces environment.</h6>
            </div>
            <li>Right-click on the <code>index.html</code> file and select "Open with Live Server".</li>
            <div className="modal-image-wrapper">
              <img src={projImg9} alt="Live Server Step" className="modal-image-centered" />
              <h6>Now start the game!</h6>
            </div>
          </ol>
          <hr />
          <h2>Technologies Used</h2>
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
    "Mario Game": {
      images: [projImg8, projImg9, projImg10],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg8} alt="Mario Game 1" className="modal-image-centered" />
            <h6>Main game interface of Mario Game</h6>
          </div>
          <hr />
          <h2>"Mario Game"</h2>
          <h4>
            An interactive game created for training and learning frontend development techniques, replicating a classic childhood game.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Mario Game is a homage to classic platformer games, built as a learning project to explore game development concepts like physics and collision detection in the browser. It was developed using vanilla JavaScript, HTML, and CSS. Play it at: <a href="https://pedro-wilker.github.io/Jogo-da-Memoria/" target="_blank" rel="noopener noreferrer">pedro-wilker.github.io/Jogo-da-Memoria</a>.
          </h4>
          <hr />
          <h2>How to Start the Game?</h2>
          <h4>Follow these steps to play:</h4>
          <h6>Note: As the game is not hosted, you’ll need an IDE (e.g., VS Code) to run it locally.</h6>
          <ol>
            <li>Clone the repository or download it as a .zip file.</li>
            <li>Open the repository in an IDE like VS Code.</li>
            <li>Open the <code>index.html</code> file or use the VS Code Live Server extension.</li>
            <li>Enjoy the game!</li>
          </ol>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </>
      ),
    },
    "Pokedex G1": {
      images: [projImg9, projImg10, projImg1],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg9} alt="Pokedex G1 1" className="modal-image-centered" />
            <h6>Main interface of Pokedex G1</h6>
          </div>
          <hr />
          <h2>"Pokedex G1"</h2>
          <h4>
            An interactive project created for training and learning frontend development techniques, inspired by a childhood favorite.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            Pokedex G1 replicates the experience of a Pokémon Pokedex, displaying information about Pokémon in an interactive format. It was built to practice API integration and UI design, using vanilla JavaScript, HTML, and CSS. Check it out at: <a href="https://pedro-wilker.github.io/Jogo-da-Memoria/" target="_blank" rel="noopener noreferrer">pedro-wilker.github.io/Jogo-da-Memoria</a>.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </>
      ),
    },
    "Camaleão dos Sabores_backend": {
      images: [projImg1, projImg2, projImg3],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg1} alt="Camaleão dos Sabores 1" className="modal-image-centered" />
            <h6>Backend structure for Camaleão dos Sabores</h6>
          </div>
          <hr />
          <h2>"Camaleão dos Sabores"</h2>
          <h4>
            A backend project for the management of restaurants and hotels, specifically for Bauneario Camaleão das Folhagens, which operates as both a restaurant and a hotel.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            This backend powers the Camaleão dos Sabores application, handling data for inventory, reservations, and customer management. It was developed with Node.js to ensure efficient data processing and API performance.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
          </ul>
        </>
      ),
    },
    "Gestão Animal_backend": {
      images: [projImg2, projImg3, projImg4],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg2} alt="Gestão Animal 1" className="modal-image-centered" />
            <h6>Backend structure for Gestão Animal</h6>
          </div>
          <hr />
          <h2>"Gestão Animal"</h2>
          <h4>
            A personal backend project designed for farm management, catering to both large and small-scale producers. Currently in development.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            The backend for Gestão Animal handles data related to livestock tracking, resource management, and production monitoring. It was built with Node.js for scalability and performance.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
          </ul>
        </>
      ),
    },
    "Tens Oportunidades_backend": {
      images: [projImg3, projImg4, projImg5],
      description: (
        <>
          <div className="modal-image-wrapper">
            <img src={projImg3} alt="Tens Oportunidades 1" className="modal-image-centered" />
            <h6>Backend structure for Tens Oportunidades</h6>
          </div>
          <hr />
          <h2>"Tens Oportunidades"</h2>
          <h4>
            A backend project developed in collaboration with the councilwoman of Tapiramutá, Manuela, to support a platform that connects service providers and clients in the region.
          </h4>
          <hr />
          <h2>About the Project</h2>
          <h4>
            The backend for Tens Oportunidades manages user data, service listings, and interactions on the platform. It was developed with Node.js to ensure efficient data handling and API responses. Visit the site at: <a href="http://tensoportunidades.com.br/" target="_blank" rel="noopener noreferrer">tensoportunidades.com.br</a>.
          </h4>
          <hr />
          <h2>Technologies Used</h2>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
          </ul>
        </>
      ),
    },
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className="recent-projects" id="projects">
      <Container>
        <h2 className="section-title">Recent Projects</h2>
        <Nav variant="pills" className="project-tabs justify-content-center mb-5">
          <Nav.Item>
            <Nav.Link eventKey="all" active={activeTab === "all"} onClick={() => setActiveTab("all")}>
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fullstack" active={activeTab === "fullstack"} onClick={() => setActiveTab("fullstack")}>
              Fullstack
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="frontend" active={activeTab === "frontend"} onClick={() => setActiveTab("frontend")}>
              Frontend
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="backend" active={activeTab === "backend"} onClick={() => setActiveTab("backend")}>
              Backend
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="videoediting" active={activeTab === "videoediting"} onClick={() => setActiveTab("videoediting")}>
              Video Editing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="diversos" active={activeTab === "diversos"} onClick={() => setActiveTab("diversos")}>
              Diversos
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Col md={4} sm={6} key={project.id} className="mb-4">
                <div className="project-card" onClick={() => handleProjectClick(project)}>
                  <div className="project-img-wrapper">
                    <img src={project.img} alt={project.title} className="project-img" />
                    <span className="project-tag">{project.tag}</span>
                  </div>
                  <h4 className="project-title">{project.title}</h4>
                </div>
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <h4>Projetos iniciados ou em desenvolvimento no momento 🤖🔧</h4>
            </Col>
          )}
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="project-modal"
        dialogClassName="modal-80w"
        backdrop="static"
        animation={true}
      >
        <Modal.Body className="modal-body-custom">
          {selectedProject && (
            <>
              <div className="modal-header-custom">
                <h2 className="modal-title-custom">{selectedProject.title}</h2>
                <Button
                  variant="link"
                  className="modal-close-btn"
                  onClick={() => setShowModal(false)}
                >
                  <span>×</span>
                </Button>
              </div>
              <div className="modal-content-wrapper">
                {projectDetails[`${selectedProject.title}_${selectedProject.category}`]?.description}
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default RecentProjects;