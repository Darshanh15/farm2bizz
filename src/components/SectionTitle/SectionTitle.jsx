import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ backgroundText, title }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__bg">{backgroundText}</h2>
      <h3 className="section-title__main">{title}</h3>
    </div>
  );
};

export default SectionTitle;
