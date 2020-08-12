import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import About from './components/About';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';

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
          <Route path="/user_profile/:user_id" component={UserProfile} />
          <Route path="/not_found" component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
