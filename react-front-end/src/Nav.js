import React, {Component} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import resume from './Assets/JulianWebsiteResume.pdf';
import { ScrollTo } from "react-scroll-to";

class Nav extends Component {


	render() {
		return (
			<Navbar bg="light" className="nav fixed-top">
				<ScrollTo>
					{({scrollTo}) => (
						<Navbar.Brand onClick={() => scrollTo({ x: 0, y: 0 })} style={{cursor: "pointer"}} className="home"><span>Home</span></Navbar.Brand>
					)}
				</ScrollTo>
				<Navbar.Brand style={{cursor: "pointer"}} href="mailto:shomalij@msu.edu" className="contact"><span>Contact</span></Navbar.Brand>
				<Navbar.Brand style={{cursor: "pointer"}} href={resume} className="resume"><span>Resume</span></Navbar.Brand>
				<hr className="line-text" data-content="SPARTAN"></hr>
			</Navbar>

		)
	}
};

export default Nav;


// <ScrollTo>
// {({ scrollTo }) => (
// 	<Navbar.Brand onClick={() => scrollTo({ x: 0, y: 4530 })} style={{cursor: "pointer"}} className="contact"><span>Contact</span></Navbar.Brand>
// )}
// </ScrollTo>
