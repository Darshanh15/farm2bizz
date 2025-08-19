import React from "react";
import "./Steps.scss";
import { CheckCircle, ShoppingBag, Package, Globe } from "lucide-react";

const steps = [
  {
    icon: <CheckCircle size={30} />,
    title: "Quality Checking",
    desc: "Every product undergoes strict quality control to ensure international standards.",
  },
  {
    icon: <ShoppingBag size={30} />,
    title: "Procurement",
    desc: "We procure fresh fruits and vegetables directly from trusted farmers.",
  },
  {
    icon: <Package size={30} />,
    title: "Packing",
    desc: "Products are packed using state-of-the-art techniques to retain freshness.",
  },
  {
    icon: <Globe size={30} />,
    title: "Exporting",
    desc: "Packed goods are exported globally in a highly secure and efficient manner.",
  },
];

const Steps = () => {
  return (
    <section className="steps-section">
      <h2 className="steps-title">Our Process</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-icon">{step.icon}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            {index !== steps.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
