import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSlider.scss";

import img1 from '../../assets/home/greeps.jpg'
import img2 from '../../assets/home/jerry.jpg'
import img3 from '../../assets/home/orange.jpg'

const slides = [
  {
    id: 1,
    image: img1,
    subtitle: "Welcome to Our FARMS2Bizz",
    title: "We Build <span class='highlight'>Dreams</span>",
    description: "Your success is our mission. Let’s grow together. Cut down the intermediaries and grow profits with our 150+ item inventory and tech-enabled delivery system.",
    primaryBtn: "Get Started",
    secondaryBtn: "Learn More",
  },
  {
    id: 2,
    image: img2,
    subtitle: "Our Services",
    title: "Creative <span class='highlight'>Solutions</span>",
    description: "Your success is our mission. Let’s grow together. Cut down the intermediaries and grow profits with our 150+ item inventory and tech-enabled delivery system.",
    primaryBtn: "View Services",
    secondaryBtn: "Contact Us",
  },
  {
    id: 3,
    image: img3,
    subtitle: "Join Us",
    title: "Let’s <span class='highlight'>Collaborate</span>",
    description: "Your success is our mission. Let’s grow together. Cut down the intermediaries and grow profits with our 150+ item inventory and tech-enabled delivery system.",
    primaryBtn: "Join Now",
    secondaryBtn: "Contact Us",
  },
];

const HeroSlider = () => {
      const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="content">
            <h3 className="subtitle">{slide.subtitle}</h3>
            <h1
              className="title"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <p className="description">{slide.description}</p>
            <button className="btn primary" onClick={() => navigate("/crops")}>{slide.primaryBtn}</button>
            <button className="btn secondary" onClick={() => navigate("/contact")}>{slide.secondaryBtn}</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
