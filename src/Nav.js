import React, {Component} from 'react';
import styles from './App.css';
import Navbar from 'react-bootstrap/Navbar';
import resume from './Assets/JulianShomaliResumeSS19.pdf';
import Home from './Home.js';

class Nav extends Component {

	render() {
		return (
			<Navbar bg="light" className="nav fixed-top">
				<Navbar.Brand style={{cursor: "pointer"}} href="#" className="home"><span>Home</span></Navbar.Brand>
				<Navbar.Brand style={{cursor: "pointer"}} href="mailto:shomalij@msu.edu" className="contact"><span>Contact</span></Navbar.Brand>
				<Navbar.Brand style={{cursor: "pointer"}} href={resume} className="resume"><span>Resume</span></Navbar.Brand>
				<hr className="line-text" data-content="SPARTAN"></hr>
			</Navbar>
		)
	}
};

export default Nav;
