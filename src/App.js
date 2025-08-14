import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";


// scss imports
import './style/main.scss'

//componets import
import Navbar from "./components/Navbar/Navbar";

// pages import
import Home from "./pages/Home/Home"
import AboutUS from "./pages/About/AboutUs"
import Contact from "./pages/Contact/Contact"
import Clients from "./pages/Clients/Clients"

import Features from "./pages/Features/Feature"


import Footer from "./components/Footer/Footer";



function App() {
  return (  
    <>
      <Navbar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/features" element={<Features />} />
       
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;

