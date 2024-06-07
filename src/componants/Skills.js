import { Col, Row, Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import reactjs from '../assets/img/React_Logo.svg';
import html from '../assets/img/HTML5_Logo.svg';
import bash from '../assets/img/bash.svg';
import powershell from '../assets/img/Powershell.svg';
import colorSharp from '../assets/img/color-sharp.png';
// import css from '../assets/img/CSS3.svg';
import css from '../assets/img/css-3.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) =>
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<div className="skill-bx">
										<h2>
											Skills
										</h2>
										<p></p>
										<Carousel responsive={responsive} infinite={true} className="skill-slider">
											<div className="item">
												<img src={reactjs} alt="Image" />
												<h5>ReactJS</h5>
											</div>
											<div className="item">
												<img src={bash} alt="Image" />
												<h5>Bash</h5>
											</div>
											<div className="item">
												<img src={powershell} alt="Image" />
												<h5>Powershell</h5>
											</div>
											<div className="item">
												<img src={html} alt="Image" />
												<h5>HTML5</h5>
											</div>
											<div className="item">
												<img src={css} alt="Image" />
												<h5>CSS</h5>
											</div>
										</Carousel>
									</div>
								</div>
							}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-left" src={colorSharp} />
		</section>
	)
}