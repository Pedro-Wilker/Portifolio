import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import aboutMeImg from '../assets/img/about-me-img.png';

export const AboutMe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = (lang: 'pt' | 'en') => {
    const filePath =
      lang === 'pt'
        ? '/assets/cv/Currículo Pedro.pdf'
        : '/assets/cv/Pedro\'s CV.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || '';
    link.click();
    setShowModal(false);
  };

  return (
    <section className="about-me" id="about">
      <Container>
        <h2 className="section-title">About Me</h2>
        {/* Card único envolvendo imagem e texto */}
        <div className="about-me-content">
          <Row className="align-items-center">
            <Col md={4} className="mb-4 mb-md-0">
              <img src={aboutMeImg} alt="About Me" className="about-me-img" />
            </Col>
            <Col md={8}>
              <p>
                I am a software developer with three years of hands-on experience in building efficient, scalable, and robust technology solutions. I specialize in delivering high-performance products aligned with best software engineering practices. With a solid understanding of the entire development lifecycle — from concept to deployment — I have expertise in languages and frameworks such as Java, TypeScript, Python, Spring Boot, Angular, ZK, Node.js, and React.
                My approach combines deep technical knowledge, strategic business awareness, and a strong focus on user experience, always aiming for excellence in every project I deliver.
              </p>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>NextJs</li>
                <li>SpringBoot</li>
                <li>Typescript</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
              <button className="download-cv-btn" onClick={() => setShowModal(true)}>
                Download CV
              </button>
            </Col>
          </Row>
        </div>

        <Row className="stats-row">
          <Col xs={6} md={3} className="text-center">
            <div className="stat">
              <span className="stat-icon">🔥</span>
              <h3>2</h3>
              <p>Years of Experience</p>
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div className="stat">
              <span className="stat-icon">📈</span>
              <h3>3</h3>
              <p>Live Projects</p>
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div className="stat">
              <span className="stat-icon">👥</span>
              <h3>45</h3>
              <p>Completed Projects</p>
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div className="stat">
              <span className="stat-icon">🏆</span>
              <h3>6</h3>
              <p>Code Languages</p>
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Select CV Version</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-around">
            <Button variant="primary" onClick={() => handleDownload('pt')}>
              CV em Português
            </Button>
            <Button variant="secondary" onClick={() => handleDownload('en')}>
              CV in English
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};