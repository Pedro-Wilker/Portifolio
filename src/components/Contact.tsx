import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact: React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>('Send');
  const [status, setStatus] = useState<{ message?: string; success?: boolean }>({});

  const onFormUpdate = (field: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário (ex.: API)
    setButtonText('Sending...');
    setTimeout(() => {
      setButtonText('Send');
      setStatus({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Entre em contato</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col className="px-1">
                  <textarea
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  />
                </Col>
                <Col className="px-1">
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
              {status.message && (
                <p className={status.success ? 'success' : 'error'}>
                  {status.message}
                </p>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};