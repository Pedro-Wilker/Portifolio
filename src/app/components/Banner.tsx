import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const toRotate = ["Dev Back-End"];
  const period = 1700;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
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
              Back-End e Front-End, trabalhando com linguagens como Java,
              JavaScript, Python e TypeScript, e frameworks como Angular, Zul,
              React, Node e React Native. Estou focado em criar soluções
              inovadoras e elegantes.
            </p>
            <button onClick={() => window.location.href = "https://wa.me/5571996592762"}>
              Vamos nos conectar <span>→</span>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Image src="/assets/img/header-img.svg" alt="Header Img" width={500} height={500} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;