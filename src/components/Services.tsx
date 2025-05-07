import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';
import { FaLaptopCode, FaPaintBrush, FaCode, FaVideo } from 'react-icons/fa';
import { ReactNode } from 'react';

// Interface para os serviços
interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually appealing user interfaces with a seamless user experience.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'Graphic Design',
      description: 'Creating visually striking designs for branding, marketing, and digital assets.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'Full-Stack Development',
      description: 'Designing and developing complete web solutions, from interactive user interfaces to robust backend systems, ensuring seamless performance.',
      icon: <FaCode />,
    },
    {
      title: 'Video Editing',
      description: 'Editing and producing high-quality videos for content creation and marketing.',
      icon: <FaVideo />,
    },
  ];

  return (
    <section className="services" id="services">
      <Container>
        <h2 className="section-title">Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} key={index} className="mb-4">
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background Decoration" />
    </section>
  );
};

export default Services;