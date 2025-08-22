import React, { useState } from "react";
import "./NavTabs.scss";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Blog",
    "Business",
    "Coming Soon",
    "Creative",
    "E-Commerce",
    "Miscellaneous",
    "One Page",
    "Personal",
    "Photography",
    "Portfolio",
  ];

  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default NavTabs;
