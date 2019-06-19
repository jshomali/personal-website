import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/fontawesome-free-solid";
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
	render() {
		return (
			<div className="viewportCover">
				<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
				</ScrollAnimation>

				<div id="allCards">

					{/* Drinkery */}
					<div className = "higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
							<div className="card">
								<div className="container">
                  <FontAwesomeIcon icon={['fas', 'beer']} size="3x"/>
									<h2>Drinkery</h2>
									<p>Built during my internship at Spartan Innovations using Ionic and Firebase.
                   For users to find bars and their deals nearby.</p>
									<br/>
									<a href="https://apps.apple.com/us/app/drinkery-bars-events-deals/id1458550167" style={{transition: "0.3s"}}>
                  Drinkery
                  <FontAwesomeIcon icon={Icons.faAngleRight} size="1x"
                  color="black" style={{transition: "0.3s"}}/>
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>

					{/* Personal Website */}
					<div className="higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true" delay="500">
							<div className="card">
								<div className="container">
									<FontAwesomeIcon icon={['fab', 'react']} size="3x"/>
									<h2>Personal Website</h2>
									<p>I created this website to showcase my interests and skills,
									built with ReactJS, NodeJS and CSS.</p>
									<br/>
									<br/>
									<a href="https://github.com/jshomali/personal-website" style={{transition: "0.3s"}}>
                    Github Repository
										<FontAwesomeIcon icon={Icons.faAngleRight} size="1x"
										color="black" style={{transition: "0.3s"}}/>
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>


					{/* Hackathon */}
					<div className="higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true" delay="500">
							<div className="card">
								<div className="container">
									<FontAwesomeIcon icon={['fab', 'apple']} size="3x"/>
									<h2>CareerLine</h2>
									<p>An iOS app using Swift created at GrizzHacks to manage career fairs,
                    providing a queue and useful services for both students and recruiters.</p>
									<br/>
									<br/>
                  Github Repository
									<a href="https://github.com/csvrcek/career" style={{transition: "0.3s"}}>
										<FontAwesomeIcon icon={Icons.faAngleRight} size="1x"
										color="black"/>
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>


					{/* Recommender System */}
					<div className = "higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
							<div className="card">
								<div className="container">
									<FontAwesomeIcon icon={['fa', 'car']} size="3x"/>
									<h2>Predicting Vehicle Crime</h2>
									<p>Using python (sklearn, pandas, numpy, surprise),
                    JupyterLab, and statistical analysis to predict the next vehicle crime in LA. </p>
									<br/>
									<a href="https://github.com/jshomali/CSE482Final" style={{transition: "0.3s"}}>
                    Github Repository
										<FontAwesomeIcon icon={Icons.faAngleRight} size="1x"
										color="black"/>
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>


				</div>

				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>

			</div>
		)
	}
}

export default Projects;
