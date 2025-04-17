import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formDetails, setFormDetails] = useState<FormDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src="/assets/img/contact-img.svg" alt="Contact Us" width={500} height={500} />
          </Col>
          <Col md={6}>
            <h2>Entre em contato</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;