import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
      </Switch>
      </Router>
    </>
    
  );
}

export default App;
