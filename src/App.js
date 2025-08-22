import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { HashRouter } from "react-router-dom";

import "@fontsource/unifrakturcook";
// scss imports
import './style/main.scss'

//componets import
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ImageScroller from "./components/ImageScroller/ImageScroller";

// pages import
import Home from "./pages/Home/Home"
import AboutUS from "./pages/About/AboutUs"
import Contact from "./pages/Contact/Contact"
import Clients from "./pages/Clients/Clients"

import Features from "./pages/Features/Feature"


import Footer from "./components/Footer/Footer";
import FruitDetail from './pages/Fruit/FruitDetail';
import FruitList from './pages/Fruit/FruitList';

import ProcessSteps from './pages/ProcessSteps/ProcessSteps'
import Steps from './pages/Steps/Steps'

import Crops from './pages/Crops/Crops';
import ItemDetail from './pages/Crops/ItemDetail';
import CropList from './pages/Crops/CropList';



function App() {
  return (  
    <>
     <ImageScroller />
      <Navbar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/features" element={<Features />} />
        <Route path="/fruit/:id" element={<FruitDetail />} />
        <Route path="/fruitlist" element={<FruitList />} />
        <Route path="/processsteps" element={<ProcessSteps />} />
        <Route path="/steps" element={<Steps />} />


        <Route path="/crops" element={<Crops />} />
        <Route path="/crops/:cropId/:itemId" element={<ItemDetail />} /> {/* crop details page*/}
       <Route path="/crops/:cropId/list" element={<CropList />} />   {/* List Page */}
       {/* <Route path="/crops/:cropId/:itemId" element={<CropDetail />} />  */}


       
        
      </Routes>
      <ScrollToTop />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;

