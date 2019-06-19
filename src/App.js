import React, { Component } from 'react';
import Home from './Home';
import Path from './Path';
import AboutMe from './AboutMe';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import Resume from './Resume';
import Projects from  './Projects';

fontawesome.library.add(brands, faAngleDown, faAngleRight)

class App extends Component {
  render() {
    const navbarItems = [{
        label: "Home",
        target: "home"
    }, {
        label: "About",
        target: "about"
    }, {
        label: "Resume",
        target: "Resume"
    }, {
        label: "Projects",
        target: "projects"
    }, ]
    return (
      <div>
          <NavBar items={navbarItems} offset={-80} duration={500} delay={0}>
          </NavBar>
          <div className="container">
              <ElementsWrapper items={navbarItems}>
                <div name="home"><Home/></div>
                <div name="about"><AboutMe/></div>
                <div name="Resume"><Resume/></div>
                <div name="projects"><Projects/></div>
              </ElementsWrapper>
          </div>
      </div>
      // <div>
      //   <Navbar/>
      //   <Home/>
      //   <AboutMe/>
      // </div>
    );
  }
}

export default App;
