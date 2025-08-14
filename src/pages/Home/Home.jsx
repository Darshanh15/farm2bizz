import React from 'react';
import './Home.css';
import heroBg from '../../assets/home/orange.jpg'; // replace with your hero image path
import AboutUs from '../About/AboutUs';
import Features from '../Features/Feature'
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
    <section className="home-hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="home-overlay">
        <div className="home-content">
          <p className="home-subtitle">Agri-Tech Company</p>
          <h1 className="home-title">
            We Deliver <br /> Directly From <span className="highlight">Farm</span> to Business
          </h1>
          <p className="home-description">
            Cut down the intermediaries and grow profits with our 150+ item inventory and tech-enabled delivery system.
          </p>
          <div className="home-buttons">
            <button className="btn primary">Know More</button>
            <button className="btn secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
    <AboutUs />
    <Features />
    <Clients />
    <Contact />
    </>

  );
};

export default Home;
