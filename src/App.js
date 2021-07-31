import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Intro from './components/intro/intro.component';
import ContactMe from './components/contact-me/contact-me.component';
import Portfolio from './components/portfolio/portfolio.component';
import Resume from './components/resume/resume.component';


import './App.scss';
import MobileNavbar from './components/mobile-navbar/mobile-navbar.component';


const App = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <MobileNavbar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Switch>
          <Route path='/contactme' component={ContactMe}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/' exact component={Intro}/>
        </Switch>   
      </Router> 
    </>
  )
};

export default App;
