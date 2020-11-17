import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";


const App = () => {
  return (
    
    <React.Fragment>
      <Navbar />
      <Container />
      <AboutUs />
      <Footer />
    </React.Fragment>
    
  );
};

export default App;
