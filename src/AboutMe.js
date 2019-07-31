import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';


class AboutMe extends Component{
  render () {
    return (
      <div className="grid">
        <div className="box box1"><div></div></div>
        <div className="box box2"><p>Currently, I am a senior at <b>Michigan State University</b>.
                    I am pursuing a Computer Science degree in their College of Engineering with a minor in Cognitive
                    Science. I have been heavily involved with the CS community
                    through out my years as a Spartan. From being the Logistics Coordinator for SpartaHack to
                    being the President of Spartan Hackers (two different clubs!), I have brought up the community
                    by getting more students involved in learning material outside of the classroom. Other topics that
                    I am interested in is Psychology, Linguistics, and Neuroscience, which is why I am pursuing that minor!
                    Other than being a constant learner, I like to play on my Nintendo Switch, go for runs (ran 2 marathons!),
                    drink locally brewed beer, and hang out with my friends!</p></div>

        <div className="box box3"><div>Being a team player is my main mojo. Pictured on
                    here is a group from both MSU and UofM at
                    GrizzHacks 3, one of the most fun hackathons I have been too.
                    The team and I ended up building CareerLine, an app to help manage
                    career fairs and keep them organized. We thought this was a great
                    problem to tackle since career fairs are usually hectic and
                    lines can usually  get confusing. We basically implemented a queue
                    system with useful services for both students and recruiters.
                    </div></div>

        <div className="box box4"><div></div></div>
        <span id="pro-header">Check out some of my projects.</span>
      </div>

    )
  }
}

export default AboutMe;
//
// <div className="cover">
//     <ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
//       <div className="split left">
//         <div className="centered">
//           <h1>How is life treating me? Good Question.</h1>
//           <p>Currently, I am a senior at <b>Michigan State University</b>. I am
//             pursuing a Computer Science degree in their College of Engineering with a minor in Cognitive
//             Science. I have been heavily involved with the CS community
//             through out my years as a Spartan. From being the Logistics Coordinator for SpartaHack to
//             being the President of Spartan Hackers (two different clubs!), I have brought up the community
//             by getting more students involved in learning material outside of the classroom. Other topics that
//             I am interested in is Psychology, Linguistics, and Neuroscience, which is why I am pursuing that minor!</p>
//           <p>Other than being a constant learner, I like to play on my Nintendo Switch, go for runs (ran 2 marathons!),
//             drink locally brewed beer, and hang out with my friends!</p>
//             <h3 id="projects-text">Check out some of my projects</h3>
//         </div>
//       </div>
//     </ScrollAnimation>
//
// </div>
