import React, {Component} from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resume from './Assets/JulianShomaliResumeSS19.pdf';
import ScrollAnimation from 'react-animate-on-scroll';

class Resume extends Component {
	constructor(props) {
		super(props);

		this.state = {
    		pageNumber: 1,
		};

		this.onDocumentLoad = this.onDocumentLoad.bind(this)
	}

	onDocumentLoad({ numPages }){
    	this.setState({ numPages });
  	}

	render() {
		const { pageNumber } = this.state;

		return (
			<div className="viewportCover">
			    <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">

				</ScrollAnimation>
				<div id="resume">
					<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
						<Document file={resume} onLoadSuccess={this.onDocumentLoad} noData="PDF not found.">
					          <Page pageNumber={pageNumber} />
					    </Document>
					    <div id="printableText">
					    	<a href={resume} style={{transition:"0.4s"}}>Printable copy</a>
					    </div>
					 </ScrollAnimation>
			    </div>
			</div>
		);
	}
}

export default Resume;
