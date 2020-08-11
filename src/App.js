import React from 'react';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Search from './components/Search.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

import FourOhFour from './components/404.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/not_found" component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
