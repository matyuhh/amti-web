import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Intro from './components/intro/intro.component';
import ContactMe from './components/contact-me/contact-me.component';
import Portfolio from './components/portfolio/portfolio.component';
import Resume from './components/resume/resume.component';


import './App.scss';


const App = () => (
  <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/contactme' component={ContactMe}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/' exact component={Intro}/>
      </Switch>   
    </Router> 
  </>
)


export default App;
