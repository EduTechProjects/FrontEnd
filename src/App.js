import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import Speak from "./pages/Speak";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Common/Navbar";
import Loading from "./pages/Loading";

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
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <subject />
      </div>
    </BrowserRouter>
  );
}

export default App;
