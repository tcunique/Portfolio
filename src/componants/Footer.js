import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from '../assets/img/me.png';
import polytec from '../assets/img/Polytech.png';
import { useInView } from "react-intersection-observer";

export const Footer = () => {

  const { ref, inView } = useInView({
    threshold: 0.1, // Triiger when 10% of the element is visible
    triggerOnce : true,
  });

  return (
    <footer className="footer">
      <div ref={ref}
								className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
        <Container fluid className="cta-section">
          <Row>
            <Col>
              <div className="cta-message text-center">
                <h1>Intéressé ? N'hésitez pas à me contacter !</h1>
                <a href="mailto:thomaschenpro@gmail.com" className="cta-email">thomaschenpro@gmail.com</a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="contact-info">
            <Col md={4}>
              <div className="contact-item">
                <h2>Qui je suis ?</h2>
                <p>Thomas Chen</p>
                <img className="me" src={me} alt="Thomas Chen" />
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <h4>Mes études ?</h4>
                <p>Ecole d'ingénieur Polytech Sorbonne - Mathématique Appliquée et Informatique</p>
                <img className="polytec" src={polytec} alt="Polytech Sorbonne" />
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <h4>Mes contacts ?</h4>
                <p>123 Rue de l'Université, 75007 Paris, France</p>
                <p>Email: <a href="mailto:thomaschenpro@gmail.com">thomaschenpro@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/thomas-chen07/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/thomas-chen07/</a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
