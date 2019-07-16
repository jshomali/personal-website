import React, {Component} from 'react';
import styles from './App.css';
import Navbar from 'react-bootstrap/Navbar';

import home from './Home';

class Nav extends Component {

	render() {
		return (
			<Navbar bg="light" className="nav fixed-top">
				<Navbar.Brand style={{cursor: "pointer"}} href={home} className="home"><span>Home</span></Navbar.Brand>
				<Navbar.Brand style={{cursor: "pointer"}} href="#" className="biography"><span>Biography</span></Navbar.Brand>
				<Navbar.Brand style={{cursor: "pointer"}} href="#" className="projects"><span>Projects</span></Navbar.Brand>
				<Navbar.Brand style={{cursor: "pointer"}} href="mailto:shomalij@msu.edu" className="contact"><span>Contact</span></Navbar.Brand>
				<Navbar.Brand style={{cursor: "pointer"}} href="#" className="resume"><span>Resume</span></Navbar.Brand>
				<hr className="line-text" data-content="SPARTAN"></hr>
			</Navbar>
		)
	}
};

export default Nav;
