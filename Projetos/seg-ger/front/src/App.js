import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './Routes';
import AppHeader from './components/AppHeader.js';

function App(){
    return (
      <Router>
        <div>
          <AppHeader/>
          <Routes/>
        </div>
      </Router>
    )
  
  
}

export default App;


//npm install --save react-router-dom