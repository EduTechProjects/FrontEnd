import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Subject from "./pages/Subject.js";
import Speak from "./pages/Speak";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Common/Navbar";

function App() {
  return (
     <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/speak" element={<Speak />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
           <subject /> 
       </div>
     </BrowserRouter>
    
  );
}

export default App;
