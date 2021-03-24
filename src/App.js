import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import OurAthletes from './components/pages/OurAthletes';
import OurProducts from './components/pages/OurProducts';
import OurVision from './components/pages/OurVision';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/OurAthletes' exact component= {OurAthletes} />
        <Route path='/OurProducts' exact component= {OurProducts} />
        <Route path='/OurVision' exact component= {OurVision} />
      </Switch>
      </Router>
    </>
    
  );
}

export default App;
