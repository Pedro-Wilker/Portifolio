import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image src="/assets/img/about-me-photo.jpg" alt="About Me" width={300} height={400} />
          </Col>
          <Col md={8}>
            <h2>About Me</h2>
            <p>
              Olá! Eu sou um desenvolvedor de software apaixonado por criar experiências digitais
              inovadoras. Trabalho com linguagens como JavaScript, Python e TypeScript, e frameworks
              como React e Node.js. Tenho experiência em desenvolvimento full-stack e estou sempre
              buscando aprender mais.
            </p>
            <button className="download-cv">Download CV</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;