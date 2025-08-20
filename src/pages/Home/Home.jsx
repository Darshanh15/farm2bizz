import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.scss";
import heroBg from "../../assets/home/orange.jpg"; // replace with your hero image path
import AboutUs from "../About/AboutUs";
import Features from "../Features/Feature";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";

import img1 from '../../assets/home/greeps.jpg'
import img2 from '../../assets/home/jerry.jpg'
import img3 from '../../assets/home/orange.jpg'

import HeroSlider from "../../components/HeroSlider/HeroSlider";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <section className="home-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="home-overlay">
          <div className="home-content">
            <p className="home-subtitle">Agri-Tech Company</p>
            <h1 className="home-title">
              We Deliver <br /> Directly From{" "}
              <span className="highlight">Farm</span> to Business
            </h1>
            <p className="home-description">
              Cut down the intermediaries and grow profits with our 150+ item
              inventory and tech-enabled delivery system.
            </p>
            <div className="home-buttons">
              <button className="btn primary" onClick={() => navigate("/crops")}>
                Know More
              </button>

              <button className="btn secondary" onClick={() => navigate("/contact")}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section class="home-hero">
  <div class="hero-slider">
    <img src={img1} alt="Hero 1" />
    <img src={img2} alt="Hero 2" />
    <img src={img3} alt="Hero 3" />
  </div>
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h3 class="hero-subtitle">Welcome to Our Website</h3>
    <h1 class="hero-title">We Build <span class="highlight">Amazing</span> Things</h1>
    <p class="hero-description">Your success is our mission. Let's grow together.</p>
    <div class="hero-buttons">
      <button class="btn primary">Get Started</button>
      <button class="btn secondary">Learn More</button>
    </div>
  </div>
</section> */}

<HeroSlider />

      <AboutUs />
      <Features />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
