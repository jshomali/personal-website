import React, {Component} from 'react';
import profileImage from './Assets/julianheadshot.png';
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
					<span id="main-header">My name is Julian Shomali.</span>
					<span id="main-text">Welcome to my world.</span>
					<span id="main-text-two">Developer.</span>
					<span id="main-text-three">Leader.</span>
					<span id="main-text-four">Runner.</span>
					<span id="main-text-last">Creator.</span>
					<span id="main-subtext">And this is my story.</span>

				</div>
				<img id="profile-image" className="animated bounceIn" src={profileImage} alt="Julian Shomali"/>
				<div className="parallax-one"></div>

			</div>
		)
	}
};

export default Home;
