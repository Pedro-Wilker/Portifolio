import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg'; 
import navIcon2 from '../assets/img/teste.png'; 
import navIcon3 from '../assets/img/nav-icon3.svg'; 
import profileImg from '../assets/img/IMG-20250411-WA0167.png'; 

export const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(100 - Math.random() * 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toRotate = ['FullStack Developer'];
  const period = 1700;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            {/* Foto de Perfil */}
            <div className="profile-wrapper">
              <img src={profileImg} alt="Profile" className="profile-img" />
            </div>
            {/* Título */}
            <h1 className="banner-title">PEDRO WILKER</h1>
            {/* Subtítulo com texto dinâmico */}
            <h2 className="banner-subtitle">
             <span className="wrap">{text}</span>
            </h2>
            {/* Ícones de Redes Sociais */}
            <div className="social-icon banner-social">
              <a href="https://www.linkedin.com/in/pedro-wilker/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Pedro-Wilker">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/pewilk3r/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            {/* Botão Contact Me */}
            <button
              className="contact-btn"
              onClick={() =>
                (window.location.href = 'https://wa.me/5571996592762')
              }
            >
              Contact Me
            </button>
          </Col>
        </Row>
        {/* Texto Scroll Down */}
        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="scroll-indicator"></div>
        </div>
      </Container>
    </section>
  );
};