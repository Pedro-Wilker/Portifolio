import { Container, Row, Col } from 'react-bootstrap';
import aboutMeImg from '../assets/img/about-me-img.png'; 

export const AboutMe: React.FC = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="align-items-center">
          {/* Coluna da Imagem */}
          <Col md={4} className="mb-4 mb-md-0">
            <img src={aboutMeImg} alt="About Me" className="about-me-img" />
          </Col>
          {/* Coluna do Texto */}
          <Col md={8}>
            <div className="about-me-content">
              <p>
                Hi, I am Pedro Wilker, a passionate Full Stack Developer with a strong foundation in frontend and backend development, allowing me to create seamless and functional digital experiences. With expertise in web development, I bring a multidisciplinary approach to every project. Currently pursuing a degree in Systems Development, I have gained hands-on experience through multiple projects, refining my skills in user research, interaction design, and full-stack development. My work is driven by creativity, problem-solving, and emerging technologies to craft intuitive and engaging digital solutions.
              </p>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Python</li>
              </ul>
              <button className="download-cv-btn">Download CV</button>
            </div>
          </Col>
        </Row>
        {/* Estatísticas */}
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
              <h3>1</h3>
              <p>Live Projects</p>
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div className="stat">
              <span className="stat-icon">👥</span>
              <h3>23</h3>
              <p>Completed Projects</p>
            </div>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <div className="stat">
              <span className="stat-icon">🏆</span>
              <h3>12</h3>
              <p>Code Languages</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};