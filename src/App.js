import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from "../src/pages/Home";
import Subject from './pages/subject';
import Speak from './pages/Speak';
import Feedback from './pages/Feedback';
import Loading1 from './pages/Loading1';
import Loading2 from "./pages/Loding2";

function App() {
  return (
    <BrowserRouter>
        <div className = "App">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/Subject" element={<Subject/>}/>
            <Route path = "/speak" element={<Speak/>}/>
            <Route path = "/Feedback" element = {<Feedback/>}/>
            <Route path = "/Loading1" element={< Loading1/>}/>
            <Route path = "/Loading2" element={<Loading2/>}/>
          </Routes>
        </div>
    
    </BrowserRouter>
  );
}

export default App;
