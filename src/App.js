import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Subject from "./pages/Subject";
import Speak from "./pages/Speak";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Common/Navbar";
import Loading2 from "./pages/Loding2";
import Loading1 from "./pages/Loding1";

function App() {
  return (
     <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/speak/:topic" element={<Speak />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path = "/loading2" elemnt = {<Loading2/>}/>
            <Route path = "/loading1" elemnt = {<Loading1/>}/>
          </Routes>
           <subject /> 
       </div>
     </BrowserRouter>
    
  );
}

export default App;
