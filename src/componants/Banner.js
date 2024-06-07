import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Pentester", "Bug Bounty Hunter"]
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {
      clearInterval(ticker);
    }
  }, [text, delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  }

  const handleButtonClick = () => {
    window.location.href = 'https://www.linkedin.com/in/thomas-chen07/';
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenu sur mon Portfolio</span>
                  <h1>{`Bonjour, je suis Thomas, `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Pentester", "Bug Bounty Hunter" ]'></span><span className="wrap">{text}</span></h1>
                  <p>Animé par une grande passion pour la cybersécurité et le développement web, mes stages et mes différents projets m'ont dotés d'une solide capacité de travail et d'autonomie. Je suis actuellement à la recherche d'un stage de 6 mois en pentesting ou dans tout domaine de la cybersécurité début Mars 2025.</p>
                  <button onClick={handleButtonClick}><span>Let's Connect <ArrowRightCircle size={25} /></span></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>

        </Row>
      </Container>
    </section>
  )
}