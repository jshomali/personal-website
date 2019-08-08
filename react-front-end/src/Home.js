import React, {Component} from 'react';
import profileImage from './Assets/julianheadshot.png';
import './App.css';

class Home extends Component {


	render() {
		return (
			<div className="main">
				<div className="main-text">
					<span id="main-header" className="animated fadeInUp">My name is Julian Shomali.</span>
					<span id="main-text" className="animated fadeInUp">Welcome to my world.</span>
					<span id="main-text-two" className="animated fadeInUp">Developer.</span>
					<span id="main-text-three" className="animated fadeInUp">Leader.</span>
					<span id="main-text-four" className="animated fadeInUp">Runner.</span>
					<span id="main-text-last" className="animated fadeInUp">Creator.</span>
					<span id="main-subtext" className="animated fadeInUp">And this is my story.</span>
				</div>
				<img id="profile-image" className="animated bounceIn" src={profileImage} alt="Julian Shomali"/>
				<div className="parallax-one"></div>
			</div>
		)
	}
};

export default Home;
