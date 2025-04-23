import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(100 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);
  const toRotate = ['Dev FullStack'];
  const period = 1700;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

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
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Seja bem-vindo ao meu portfólio.</span>
            <h1>
              {`Olá, eu sou Pedro e sou `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Bem-vindo ao meu portfólio! Sou um desenvolvedor de software
              FullStack, trabalhando com linguagens como Java, JavaScript, Python
              e TypeScript, e frameworks como Angular, Zul, React, Node e React
              Native. Estou focado em criar soluções inovadoras e elegantes
            </p>
            <button
              onClick={() =>
                (window.location.href = 'https://wa.me/5571996592762')
              }
            >
              Vamos nos conectar
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};