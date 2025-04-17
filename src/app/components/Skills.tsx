import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Skills: React.FC = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 0 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Minha principal área é o desenvolvimento de softwares, incluindo
                sites institucionais, blogs, landing pages, aplicativos para todas
                as plataformas e sistemas.
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <Image src="/assets/img/meter1.svg" alt="Image" width={50} height={50} />
                  <h5>Software Developer</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/meter1.svg" alt="Image" width={50} height={50} />
                  <h5>FullStack Developer</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/meter3.svg" alt="Image" width={50} height={50} />
                  <h5>Web Design</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Image src="/assets/img/color-sharp.png" alt="" className="background-image-left" width={400} height={400} />
    </section>
  );
};

export default Skills;