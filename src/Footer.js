import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footerContent">
        	<div style={{paddingTop:"30px"}}>
          		Created by Julian Shomali
          	</div>

	        <div>
	        	{/* Github */}
	        	<a href="https://github.com/jshomali">
	         		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'github']} size="2x"/>
	         	</a>

	         	{/* Linkedin */}
	         	<a href="https://www.linkedin.com/in/julian-shomali">
	         		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'linkedin']} size="2x"/>
	         	</a>

	         	{/* Facebook */}
	         	<a href="https://www.facebook.com/jshomali1">
	          		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'facebook']} size="2x"/>
	          	</a>

	          	{/* Instagram */}
	          	<a href="https://www.instagram.com/jshomali/">
	          		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'instagram']} size="2x"/>
	          	</a>
	        </div>
        </div>
      </div>
    )
  }
}


export default Footer;