import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Social/>
      <About/> 
      <Footer/>
    </div>
  );
}

export default App;
