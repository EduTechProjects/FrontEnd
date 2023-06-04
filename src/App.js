import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import Subject from './pages/Subject.js';
import Speak from './pages/Speak';
import Feedback from './pages/Feedback';


function App() {
  return (
    <BrowserRouter>
        <div className = "App">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/Subject" element={<Subject/>}/>
            <Route path = "/speak" element={<Speak/>}/>
            <Route path = "/Feedback" element = {<Feedback/>}/>
            
            
          </Routes>
          
          <Subject/>
        </div>
    
    </BrowserRouter>
  );
}

export default App;
