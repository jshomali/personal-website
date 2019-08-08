import React, { Component } from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import Projects from  './Projects';
import Footer from './Footer';
import Nav from './Nav';
import Form from './Form';

fontawesome.library.add(brands, faAngleDown, faAngleRight);

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
