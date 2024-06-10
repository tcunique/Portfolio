import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/cybathlon.png';
import cpts from '../assets/img/cpts.png';
import google_cyber from '../assets/img/Google_cybersecurity.png';
import portfolio from '../assets/img/Portfolio.png';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export const Projects = () => {
  const projects = [
    {
      title: "Google Cybersecurity",
      description: "Certification Google Cybersecurity, cette certification m'a permis d'avoir une introduction à la cybersécurité. \n\n Date d'obtention : Janvier 2024 \n Outil : Google, SQL, Python, Linux, Wireshark.",
      imgUrl: google_cyber,
    },
    {
      title: "eJPT",
      description: "Certification eLearnSecurity Junior Penetration Tester obtenue en mai 2024. \n\n Date d'obtention : Mai 2024 \n Outil : Kali Linux, Metasploit, BurpSuite, Nmap, Nessus, exploitation des différents protocols tels que RDP, FTP, SMB, HTTP etc.",
      imgUrl: projImg2,
    },
    {
      title: "CPTS HackTheBox",
      description: "En cours de réalisation. \n Date de commencement : Mai 2024 \n",
      imgUrl: cpts,
    },
  ];

  const project2 = [
    {
      title: "Développement d'un Portfolio",
      description: "Développement de mon portfolio en ReactJS. \n\n Date : Juin 2024 \n Outil : ReactJS, HTML, CSS.",
      imgUrl: portfolio,
    },
    {
      title: "Web App",
      description: "Stage en cours de réalisation, développement d'une application web pour la prise de rendez-vous en ligne avec ReactJS et NodeJS.\n\n Date : Juin 2024 - Août 2024 \n Durée : 2 mois. \n Outil : ReactJS, NodeJS, PostgreSQL.",
      imgUrl: projImg1,
    },
  ];

  const project3 = [
    {
      title: "Compétition Cybathlon",
      description: `Projet dans le cadre de la compétition Cybathlon en partenariat avec l'ISIR, développement d'une reconnaissance d'obstacle et transcription sur une carte d'occupation de l'espace. \n
Date : Septembre 2023 - Mai 2024 \n Outil : Python, ROS, OpenCV, C++.`, 
      imgUrl: projImg5,
    },
    {
      title: "Jeux vidéos",
      description: "Développement d'un jeu vidéo en C++ avec la bibliothque SFML. \n\n Date : Décembre 2024 - Janvier 2024 \n Outil : C++, SFML.",
      imgUrl: projImg4,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1, // Triiger when 10% of the element is visible
    triggerOnce: true,
  });


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div ref={ref}
                className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
                  <h2>Projets</h2>
                  <p>Durant mon cursus académique à Polytech Sorbonne, j'ai eu l'opportunité d'entreprendre de nombreux projets.</p>
         
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Certification cybersécurité</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Développement Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Projet école</Nav.Link>
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
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        project3.map((project, index) => {
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
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}