import React from "react";
import { BiCheckShield } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { FaBoxOpen, FaPlaneDeparture } from "react-icons/fa";
import "./ProcessSteps.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const STEPS = [
  {
    title: "Quality Checking",
    desc: "Quality checking for exports of fruits and vegetables involves a meticulous inspection process to ensure that the produce meets international standards and specifications. This comprehensive assessment includes evaluating factors such as freshness, size, color, texture, and overall appearance. Additionally, stringent checks are conducted to verify compliance with phytosanitary regulations, pesticide residue limits, and other relevant quality parameters.",
    Icon: BiCheckShield,
  },
  {
    title: "Procurement",
    desc: "Procurement for exports of fruits and vegetables involves the strategic acquisition of fresh produce from reliable and certified suppliers to meet the demands of international markets. This process includes careful sourcing, negotiation, and coordination with growers and distributors to ensure a consistent and high-quality supply chain. Attention is given to factors such as product specifications, packaging, and adherence to international standards and regulations.",
    Icon: MdShoppingCart,
  },
  {
    title: "Packing",
    desc: "Packing for exports of fruits and vegetables is a critical step in ensuring the safe and optimal transport of perishable goods. This process involves meticulous attention to packaging materials, design, and techniques to protect the produce from damage, bruising, and spoilage during transit. Packaging is tailored to the specific needs of each type of fruit or vegetable, considering factors such as size, shape, and perishability.",
    Icon: FaBoxOpen,
  },
  {
    title: "Exporting",
    desc: "Exporting fruits and vegetables involves the comprehensive process of preparing, packaging, and shipping fresh produce to international markets. This dynamic trade requires adherence to strict quality standards, compliance with phytosanitary regulations, and efficient logistics management. From securing reliable suppliers through procurement to ensuring meticulous packing tailored to each type of produce, exporters strive to deliver high-quality, fresh goods that meet the diverse demands of global consumers.",
    Icon: FaPlaneDeparture,
  },
];

const ProcessSteps = () => {
  return (
    <>
        <div>
        <SectionTitle backgroundText="FARMS2Bizz" title="Our Export" />
      </div>

    {/* method 1 */}
      {/* <section className="process">
        <h2 className="process__heading">Our Process</h2>
        <ol className="process__steps">
          {STEPS.map(({ title, desc, Icon }, i) => (
            <li className="process__step" key={i}>
              <div className="process__iconWrap">
                <span className="process__badge">{i + 1}</span>
                <Icon className="process__icon" />
              </div>
              <h3 className="process__title">{title}</h3>
              <p className="process__desc">{desc}</p>
            </li>
          ))}
        </ol>
      </section> */}

   {/* method 2 */}
      <section className="process-container">
        {STEPS.map(({ title, desc, Icon }, i) => (
          <div className="step" key={i}>
            <div className="step-number">{i + 1}</div>
            <div className="step-content">
              <div className="step-header">
                <h3>{title}</h3>
                <span className="icon">
                  <Icon />
                </span>
              </div>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProcessSteps;
