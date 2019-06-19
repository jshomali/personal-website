import React, {Component} from 'react';
import profileImage from './imgs/julianheadshot.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './App.css';

class Home extends Component {
	scrollAVH() {
		window.scroll({
			top: window.innerHeight,
			left: 0,
  			behavior: 'smooth'
		});
	}

	render() {
		return (
			<div>
				<div className="viewportCover">
					<div className="profile">
						<h1 id="first" className="animated fadeInUp">hello.World</h1>
						<img id="profileImage" className="animated bounceIn" src={profileImage} style={{height:"300px", borderRadius:"50%", border:"3px solid white"}} alt="Julian Shomali"/>
	  		     <h2 id="jobs" className="animated fadeInUp"> <span style={{color: "blue"}}> Developer </span> | <span style={{color: "red"}}> Runner </span> | <span style={{color: "#18453b"}}>Spartan</span> </h2>
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true" offset = "0" delay = "0" duration = "0.5">
							<span style={{cursor:"pointer"}} onClick={this.scrollAVH}><FontAwesomeIcon icon="angle-down" className="pulse" size="3x"/></span>
						</ScrollAnimation>
					</div>
				</div>
			</div>

		)
	}
};

export default Home;
