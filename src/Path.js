import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';


class Path extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images
    }
  }

  render () {
    return (
      <div className="viewportCover">
          <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
            <h1 id="path">Choose Your Path</h1>
          </ScrollAnimation>
          <div className="buttons">
            <Button href="#">About Me</Button>
            <Button href="#">Resume</Button>
            <Button href="#">Projects</Button>
          </div>
      </div>
    )
  }
}

export default Path;
