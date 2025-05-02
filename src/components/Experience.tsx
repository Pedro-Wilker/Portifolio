import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<number | null>(null);
  const experiences = [
    {
      title: 'Smart4Sistemas | Software Developer',
      details: (
        <>
          <p><strong>Duration: 2 years</strong></p>
          <p>
            At Smart4Sistemas, I actively contributed to the development of five different systems and led the technical implementation of two major projects. This experience strengthened my ability to work within multidisciplinary teams and deliver high-quality, scalable solutions.
          </p>
          <p>Key achievements and skills developed during this time include:</p>
          <ul className="experience-details-list">
            <li>Cross-platform development using Angular and Spring Boot, ensuring high performance and usability.</li>
            <li>Web interface development with ZK Framework, focusing on intuitive and functional UI.</li>
            <li>Optimization of systems to handle high volumes of concurrent users with stability and security.</li>
            <li>Implementation of customized features and internationalization support for global accessibility.</li>
            <li>Code versioning and CI practices using GitLab.</li>
          </ul>
          <p><strong>Key Technologies:</strong> Java, Angular, ZK, Spring Boot, TypeScript, GitLab.</p>
        </>
      ),
    },
    {
      title: 'Freelancer — Full Stack Developer',
      details: (
        <>
          <ul className="experience-details-list">
            <li><strong>Camaleão dos Sabores:</strong> A complete application for order management and restaurant administration. Designed with a focus on operational agility, intelligent order tracking, user-friendly experience, and modern UI.</li>
            <li><strong>Gestão Animal:</strong> A smart platform developed to streamline farm management and daily agricultural tasks. It features tools for automation, livestock data control, and operational productivity enhancement.</li>
          </ul>
          <p>Both projects were built to address real-world market demands, emphasizing performance, responsiveness, hyper customization, and user experience.</p>
          <p>Technical Highlights:</p>
          <ul className="experience-details-list">
            <li>React Native, Next.js, and Node.js used for building high-performance mobile and web applications.</li>
            <li>Prisma ORM for efficient and scalable database interactions.</li>
            <li>GitHub for source control and agile development workflow.</li>
            <li>API testing and validation using Insomnia.</li>
            <li>Advanced customization and internationalization features, supporting multi-platform usage.</li>
          </ul>
          <p><strong>Key Technologies:</strong> React Native, Next.js, Node.js, TypeScript, Prisma, GitHub, Insomnia.</p>
        </>
      ),
    },
  ];

  const educations = [
    {
      title: 'Centro Universitário Jorge Amado – Salvador, Brazil Bachelor’s Degree in Computer Science',
      details: (
        <>
          <p><strong>July 2020 – December 2024</strong></p>
          <p>Throughout the program, I developed a strong theoretical and practical foundation in data structures, algorithms, software engineering, system architecture, databases, networking, and full-stack development. I took part in academic and personal projects, always applying my knowledge in innovative and impactful solutions.</p>
        </>
      ),
    },
    
  ];

  const languages = [
    {
      title: 'Portuguese (Brazil) — Native',
      details: (
        <>
          <p><strong>Excellent communication skills, both written and verbal, with strong command of technical writing.</strong></p>
        </>
      ),
    },
    {
      title: 'English — Intermediate',
      details: (
        <>
          <p><strong>Proficient in reading technical documentation, writing development notes, and engaging in collaborative communication in international environments.</strong></p>
        </>
      ),
    },
  ];

  const toggleExperience = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  const toggleEducation = (index: number) => {
    setSelectedEducation(selectedEducation === index ? null : index);
  };

  const toggleLanguages = (index: number) => {
    setSelectedLanguages(selectedLanguages === index ? null : index);
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

        {/* Languages */}
        <h2 className="section-title">Languages</h2>
        <Row>
          <Col md={12}>
            {languages.map((edu, index) => (
              <div key={index} className="mb-3">
                <div
                  className={`experience-title ${selectedLanguages === index ? 'active' : ''}`}
                  onClick={() => toggleLanguages(index)}
                >
                  {edu.title}
                </div>
                {selectedLanguages === index && (
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