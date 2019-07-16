import React, {Component} from 'react';
import profileImage from './imgs/julianheadshot.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './App.css';
import countryImage from './Assets/country-image.jpg';

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
			<div className="main">
				<div className="main-text">
					<span id="main-header">Welcome to my world.</span>
					<span id="main-text">My name is Julian Shomali.</span>
					<span id="main-text-two">Developer.</span>
					<span id="main-text-three">Leader.</span>
					<span id="main-text-four">Runner.</span>
					<span id="main-text-last">Creator.</span>
					<span id="main-subtext">And this is my story.</span>
				</div>
				<img id="profile-image" className="animated bounceIn" src={profileImage} alt="Julian Shomali"/>
				<div className="parallax-one"></div>

				<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true" offset = "0" delay = "2000" duration = "0.5">
					<span style={{cursor:"pointer"}} onClick={this.scrollAVH}><FontAwesomeIcon icon="angle-down" className="pulse" size="3x"/></span>
				</ScrollAnimation>
			</div>
		)
	}
};

export default Home;
