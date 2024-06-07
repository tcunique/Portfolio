import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/cybathlon.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Web App",
      description: "Stage en cours de réalisation, développement d'une application web pour la prise de rendez-vous en ligne avec ReactJS et NodeJS.\n Durée : 2 mois. \n Outil : ReactJS, NodeJS, PostgreSQL.",
      imgUrl: projImg1,
    },
    {
      title: "eJPT",
      description: "Certification eLearnSecurity Junior Penetration Tester obtenue en mai 2024.",
      imgUrl: projImg2,
    },
    {
      title: "CPTS HackTheBox",
      description: "En cours de réalisation",
      imgUrl: projImg3,
    },
  ];

  const project2 = [
    {
      title: "Compétition Cybathlon",
      description: "Projet dans le cadre de la compétition Cybathlon en partenariat avec l'ISIR, développement d'une reconnaissance d'obstacle et transcription sur une carte d'occupation de l'espace.",
      imgUrl: projImg5,
    },
    {
      title: "Jeux vidéos",
      description: "Développement d'un jeu vidéo en C++ avec la bibliothque SFML.",
      imgUrl: projImg4,
    },
    {
      title: "",
      description: "En cours de réalisation",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>Durant mon cursus académique à Polytech Sorbonne, j'ai eu l'opportunité d'entreprendre de nombreux projets.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      project2.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}