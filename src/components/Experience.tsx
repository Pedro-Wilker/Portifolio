import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null); // Inicialmente, nenhum card está aberto
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null); // Controle para Education

  const experiences = [
    {
      title: 'Smart4Sistemas, Salvador — Desenvolvedor Full Stack Junior',
      details: (
        <>
          <p><strong>FEVEREIRO DE 2023 - Atual</strong></p>
          <p>
            Durante meus dois anos na Smart4Sistemas, participei do desenvolvimento de cinco sistemas distintos, liderando o processo de criação e implementação de dois deles. Trabalhei com diversas linguagens e frameworks para criar aplicações robustas e escaláveis.
          </p>
          <p>Destaco algumas das habilidades e tecnologias que apliquei durante esse período:</p>
          <ul className="experience-details-list">
            <li>Utilização do Angular e Spring Boot para desenvolvimento de sistemas multiplataforma.</li>
            <li>Uso do ZK para desenvolvimento de sistemas web.</li>
            <li>Otimização para alta capacidade de usuários.</li>
            <li>Implementação de recursos, personalização e internacionalização.</li>
            <li>Utilização do GitLab para versionamento de código.</li>
          </ul>
          <p><strong>Competências:</strong> Angular; Java; ZK; Spring Boot; TypeScript</p>
        </>
      ),
    },
    {
      title: 'Freelancer — Desenvolvedor Full Stack',
      details: (
        <>
          <p><strong>JUNHO DE 2024 - ATUALMENTE</strong></p>
          <p>Desenvolvi dois projetos autorais:</p>
          <ul className="experience-details-list">
            <li><strong>Camaleão dos Sabores:</strong> Aplicativo para gerenciamento de pedidos e administração de restaurantes.</li>
            <li><strong>Gestão Animal:</strong> Solução voltada para facilitar o gerenciamento de fazendas e suas atividades.</li>
          </ul>
          <p>Ambos foram criados com foco na experiência do usuário e na performance das aplicações.</p>
          <p>Destaco algumas das habilidades e tecnologias que apliquei durante esse período:</p>
          <ul className="experience-details-list">
            <li>Utilização de React Native, Next.js e Node.js para desenvolvimento das aplicações.</li>
            <li>Otimização para alta capacidade de usuários.</li>
            <li>Implementação de recursos de hiper personalização e internacionalização.</li>
            <li>Implementação de recursos, personalização e internacionalização.</li>
            <li>Uso do GitHub para versionamento e do Insomnia para testes de API.</li>
          </ul>
          <p><strong>Competências:</strong> React Native; Next.js; Node.js; TypeScript; Prisma.</p>
        </>
      ),
    },
  ];

  const educations = [
    {
      title: 'Centro Universitário Jorge Amado, Salvador — Bacharelado em Ciência da Computação',
      details: (
        <>
          <p><strong>JULHO DE 2020 - DEZEMBRO DE 2024</strong></p>
        </>
      ),
    },
    // Você pode adicionar mais formações aqui, se desejar
  ];

  const toggleExperience = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index); // Fecha se já estiver aberto
  };

  const toggleEducation = (index: number) => {
    setSelectedEducation(selectedEducation === index ? null : index); // Fecha se já estiver aberto
  };

  return (
    <section className="experience" id="experience">
      <Container>
        {/* Work Experience */}
        <h2 className="section-title">Work Experience</h2>
        <Row>
          <Col md={12}>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-3">
                <div
                  className={`experience-title ${selectedExperience === index ? 'active' : ''}`}
                  onClick={() => toggleExperience(index)}
                >
                  {exp.title}
                </div>
                {selectedExperience === index && (
                  <div className="experience-details">
                    {exp.details}
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>

        {/* Education */}
        <h2 className="section-title">Education</h2>
        <Row>
          <Col md={12}>
            {educations.map((edu, index) => (
              <div key={index} className="mb-3">
                <div
                  className={`experience-title ${selectedEducation === index ? 'active' : ''}`}
                  onClick={() => toggleEducation(index)}
                >
                  {edu.title}
                </div>
                {selectedEducation === index && (
                  <div className="experience-details">
                    {edu.details}
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};