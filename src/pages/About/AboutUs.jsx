// import React from 'react';
// import './AboutUs.css';
// import { FaLeaf } from 'react-icons/fa';
// import img1 from '../../assets/about/woman-farmer.jpg'
// import img2 from '../../assets/about/old-man-farmer.jpg'

// const AboutUs = () => {
//   return (
//     <section className="about-section">
//       <div className="about-left">
//         <div className="about-img-wrapper">
//           <img src={img1} alt="Farmer Woman" className="top-img" />
//           <img src={img2} alt="Farmer Man" className="bottom-img" />
//           <div className="about-banner">Equipped To Handle<br />20+ Tonnes Daily</div>
//         </div>
//       </div>

//       <div className="about-right">
//         <p className="about-subtitle">About Us</p>
//         <h2 className="about-title">Veggies And Fruits Under One Roof</h2>
//         <p className="about-description">
//           From the time of inception in 2019, Farms2B has transformed greatly from an idea to a startup,
//           and then to a fully-fledged organisation catering fruits and vegetables directly from farmers
//           to a diverse clientele in different sectors like hospitality, F&B, healthcare and industrial catering.
//         </p>
//         <p className="about-highlight">
//           Farms2B was founded on the principles of quality, innovation and efficiency.
//           And this is very well reflected in the way we operate, as evident from our rapidly growing
//           and satisfied client base.
//         </p>

//         <div className="about-box">
//           <div className="about-box-icon"><FaLeaf /></div>
//           <div>
//             <h4>Comprehensive Inventory</h4>
//             <p>With a diverse inventory of around 150+ items, we can fulfill all your farm produce needs most efficiently.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";
import "./AboutUs.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// import { FaThumbsUp, FaThumbsUp,  FaFileAlt,  FaUsers, } from "react-icons/fa";
import {  FaHandshake,  FaThumbsUp,  FaFileAlt,  FaUsers,} from "react-icons/fa"; // icons

import aboutImg1 from "../../assets/about/fruti.jpg";
import aboutImg2 from "../../assets/about/export.jpg";
import team from "../../assets/about/team.jpg";
import quality from "../../assets/about/quality-policy.jpg";
import management from "../../assets/about/quality-management.jpg";
import network from "../../assets/about/business-network.jpg";

// Data array for reusability
const aboutData = [
  {
    img: team,
    title: "Our Team",
    desc: "We have a team of experienced professionals dedicated to delivering high-quality service and innovative solutions.",
    icon: <FaUsers />,
  },
  {
    img: quality,
    title: "Quality Policy",
    desc: "Our policy ensures top-notch standards, focusing on continuous improvement and customer satisfaction.",
    icon: <FaThumbsUp />,
  },
  {
    img: management,
    title: "Quality Management",
    desc: "We implement strict quality management practices to maintain consistency and reliability in our services.",
    icon: <FaFileAlt />,
  },
  {
    img: network,
    title: "Business Network",
    desc: "Our extensive business network ensures timely delivery and trusted partnerships across industries.",
    icon: <FaHandshake />,
  },
];



const AboutUs = () => {
  return (
    <>
      <div>
        <SectionTitle backgroundText="FARMS2Bizz" title="About Us" />
      </div>

      <section className="about" id="about">
        <div className="about__container">
          {/* Left Content */}
          <div className="about__content">
            {/* <h2>About Us</h2> */}
            <h3>Welcome to FARMS2Bizz</h3>
            <p>
              FARMS2Bizz Exports was established in 2007 and is now a leading
              exporter of Farm Fresh Vegetables and Fruits to various markets
              across the world. As a distinguished producer and Exporter, now we
              supply all types of Fresh Fruits and Vegetables, Lettuces, Herbs,
              Leaves, Spices, pulses, Powders, Dried nuts, Dairy products, Food
              products, and many more to Maldives and a number of destinations
              in the Globe. FARMS2Bizz Exports believes in delivering and
              serving its clientele with products that keep the highest standard
              of quality.
            </p>
            <p>
              Today FARMS2Bizz Exports caters to the fruits and vegetable
              requirements of major importing houses in Maldives, Dubai, Saudi
              Arabia, Qatar, and Bahrain. We currently maintain the supply chain
              requirements of 30–40 major Resorts in Maldives. Some of our
              prominent clients in Maldives are Villa Groups of Resorts, Dream
              Island Resort Groups, Ozen Group Resorts, Le Meridian Resorts,
              Maalifushi Resorts etc.
            </p>
          </div>

          {/* Right Images */}
          <div className="about__images">
            <img src={aboutImg1} alt="Fresh Vegetables" className="main-img" />
            <img
              src={aboutImg2}
              alt="Export & Shipping"
              className="small-img"
            />
          </div>
        </div>
      </section>


{/* <section className="about-section">
      <div className="grid">
        {aboutData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="card__content">
              <h3>
                <i className={item.icon}></i> {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}

 <section className="about-section">
      {aboutData.map((item, index) => (
        <div className="about-card" key={index}>
          <h3 className="about-card__title">
            <span className="about-card__icon">{item.icon}</span>
            {item.title}
          </h3>
          <div className="about-card__body">
            <img src={item.img} alt={item.title} className="about-card__img" />
            <p className="about-card__desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default AboutUs;
