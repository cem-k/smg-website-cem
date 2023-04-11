import React from 'react';
import './App.css';

import {
  Home, About, Privacy, Terms, Cookies, Return, Disclaimer, AcceptableUse, Eula, GetStarted
} from './container';

import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/smg-website-cem">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/privacy" element={<Privacy/>}/> 
          <Route path="/terms" element={<Terms/>}/> 
          <Route path="/cookies" element={<Cookies/>}/> 
          <Route path="/return" element={<Return/>}/> 
          <Route path="/disclaimer" element={<Disclaimer/>}/> 
          <Route path="/use" element={<AcceptableUse/>}/> 
          <Route path="/eula" element={<Eula />}/> 
          <Route path="/getstarted" element={<GetStarted />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
