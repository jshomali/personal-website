import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import grizzHacks from './imgs/grizzhacks2018.jpg';

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
                  Science. I have been heavily involved with the CS community
                  through out my years as a Spartan. From being the Logistics Coordinator for SpartaHack to
                  being the President of Spartan Hackers (two different clubs!), I have brought up the community
                  by getting more students involved in learning material outside of the classroom. Other topics that
                  I am interested in is Psychology, Linguistics, and Neuroscience, which is why I am pursuing that minor!</p>
                <p>Other than being a constant learner, I like to play on my Nintendo Switch, go for runs (ran 2 marathons!),
                  drink locally brewed beer, and hang out with my friends!</p>
                  <h3 id="projects-text">Check out my some of my projects</h3>
              </div>
            </div>
          </ScrollAnimation>
          <div>
            <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
              <div class="split right">
                <div class="centered">
                  <div class="imgs">

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
