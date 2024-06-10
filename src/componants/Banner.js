import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Pentester", "Bug Bounty Hunter"]
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const period = 2000;
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Triiger when 10% of the element is visible
    triggerOnce : true,
  });

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
      setDelta(prevDelta => prevDelta /3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(150);
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
            <div ref={ref}  
              className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
              <span className="tagline">Bienvenu sur mon Portfolio</span>
              <h1 className = "hello">Bonjour, je suis Thomas,</h1>
              <h1 className='banner-text'><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Pentester", "Bug Bounty Hunter" ]'></span><span className="wrap">{text}</span></h1>
              <p>Animé par une grande passion pour la cybersécurité et le développement web, mes stages et mes différents projets m'ont dotés d'une solide capacité de travail et d'autonomie. Je suis actuellement à la recherche d'un stage de 6 mois en pentesting ou dans tout domaine de la cybersécurité début mars 2025.</p>
              <button onClick={handleButtonClick}><span>Let's Connect <ArrowRightCircle size={25} /></span></button>
          
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>

        </Row>
      </Container>
    </section>
  )
}