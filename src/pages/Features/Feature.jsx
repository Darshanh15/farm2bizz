import React from 'react';
import './Features.css';
import { FaSeedling } from 'react-icons/fa';

const featuresList = [
  {
    title: "1. Direct Sourcing",
    desc: "Produce procured directly from farmers and delivered to businesses.",
  },
  {
    title: "2. Quality Assurance",
    desc: "Rigorous sorting by dedicated QC team at safe and hygienic in-house facility.",
  },
  {
    title: "3. Prompt Delivery",
    desc: "In-house freight from first mile to last mile to ensure timely delivery.",
  },
];

const Feature = () => {
  return (
    <>
      <section className="feature-section">
        <div className="overlay-box">
          <h2>Farms2B will transform the business<br />of fresh produce supply chain.</h2>
          <div className="features-box">
            {featuresList.map((feature, index) => (
              <div className="feature-card" key={index}>
                <FaSeedling className="icon" />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="opportunity-section">
        <h2 className="opportunity-title">Creating opportunities for everyone</h2>
        <div className="opportunity-cards">
          <div className="opportunity-card card-green">
            <h3>Benefits for Farmers</h3>
            <ul>
              <li>Better Earnings</li>
              <li>One-stop-sale</li>
              <li>Payment in 24 hours</li>
              <li>Transparent weighing</li>
            </ul>
          </div>

          <div className="opportunity-card card-grey">
            <h3>Convenience for Retailers</h3>
            <ul>
              <li>Competitive pricing</li>
              <li>Doorstep delivery</li>
              <li>Quality grade produce</li>
              <li>Time-efficient service</li>
            </ul>
          </div>

          <div className="opportunity-card card-dark">
            <h3>Savings for Consumers</h3>
            <ul>
              <li>Time-efficient service</li>
              <li>100% traceable to farm – Improves food safety</li>
              <li>Better quality</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
