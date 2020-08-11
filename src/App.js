import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import About from './components/About';
import Footer from './components/Footer';
import FourOhFour from './components/404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
          <Route path="/not_found" component={FourOhFour} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
