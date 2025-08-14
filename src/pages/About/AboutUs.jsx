import React from 'react';
import './AboutUs.css';
import { FaLeaf } from 'react-icons/fa';
import img1 from '../../assets/about/woman-farmer.jpg'
import img2 from '../../assets/about/old-man-farmer.jpg'

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-img-wrapper">
          <img src={img1} alt="Farmer Woman" className="top-img" />
          <img src={img2} alt="Farmer Man" className="bottom-img" />
          <div className="about-banner">Equipped To Handle<br />20+ Tonnes Daily</div>
        </div>
      </div>

      <div className="about-right">
        <p className="about-subtitle">About Us</p>
        <h2 className="about-title">Veggies And Fruits Under One Roof</h2>
        <p className="about-description">
          From the time of inception in 2019, Farms2B has transformed greatly from an idea to a startup, 
          and then to a fully-fledged organisation catering fruits and vegetables directly from farmers 
          to a diverse clientele in different sectors like hospitality, F&B, healthcare and industrial catering.
        </p>
        <p className="about-highlight">
          Farms2B was founded on the principles of quality, innovation and efficiency. 
          And this is very well reflected in the way we operate, as evident from our rapidly growing 
          and satisfied client base.
        </p>

        <div className="about-box">
          <div className="about-box-icon"><FaLeaf /></div>
          <div>
            <h4>Comprehensive Inventory</h4>
            <p>With a diverse inventory of around 150+ items, we can fulfill all your farm produce needs most efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
