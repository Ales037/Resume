import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Navigation from './components/Navbaritem';
import Home  from './pages/Home';
import Skill from './pages/Skill';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="appedit">
      <Router>
        <Navigation />
        <Switch>
        <Route path='/'  exact component={Home}  />
        <Route path='/home'  exact component={Home}  />
        <Route path='/skills' component={Skill}  />
        <Route path='/contact' component={Contact}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
