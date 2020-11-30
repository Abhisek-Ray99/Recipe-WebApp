import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/footer';
import Explore from './components/Explore';
import About from './components/About';
import Contact from './components/Contact';
import './components/style.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Hero}/>
          <Route path="/explore" exact component={Explore} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
