import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import grizzHacks from './imgs/grizzhacks2018.jpg';
import spartaHack from './imgs/spartahackrock.jpg';
import volunteer from './imgs/volunteering.jpg';
import stPattys from './imgs/stpattys.jpg';
import brain from './imgs/brainresponses.jpg';

class AboutMe extends Component{
  render () {
    return (
      <div className="viewportCover">
          <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
            <div class="split left">
              <div class="centered">
                <h1>How is life treating me? Good Question.</h1>
                <p>Currently, I am a senior at <b>Michigan State University</b>. I am
                  pursuing a Computer Science degree in their College of Engineering with a minor in Cognitive
                  Science. I have been heavily involved with the Spartan CS community
                  through out my years as a Spartan. From being the Logistics Coordinator for SpartaHack to
                  being the President of Spartan Hackers (two different clubs!), I have brought up the community
                  by getting more students involved in learning material outside of the classroom. Other topics that
                  I am interested in is how the brain responds to certain events on the neuroscience level.
                  I am excited to take a class on how the brain responds to different advertisments this Fall semester!</p>
              </div>
            </div>
          </ScrollAnimation>
          <div>
            <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
              <div class="split right">
                <div class="centered">
                  <div class="imgs">
                    <img id="grizz" src={grizzHacks} alt="Group Photo"/>
                    <img id="br" src={brain} alt="Brain"/>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
      </div>
    )
  }
}

export default AboutMe;
