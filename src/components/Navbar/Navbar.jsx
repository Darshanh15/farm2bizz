import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import fruits from "../../data/fruits";
import "./Navbar.scss";
import logo from "../../assets/logo.png";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="FARM2BIZZ" className="navbar-logo" />
        </Link>
      </div>

      {/* Top-right toggle icon */}
      <div className="menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </div>

      {/* Menu links */}
      <ul className={mobile ? "nav-links nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMobile(false)}>Home</Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={() => setMobile(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/features" onClick={() => setMobile(false)}>Features</Link>
        </li>
        <li>
          <Link to="/clients" onClick={() => setMobile(false)}>Clients</Link>
        </li>

        {/* Crop Dropdown */}
        <li className="dropdown">
          {/* Make Crop clickable */}
          <span
            className="dropdown-toggle"
            onClick={() => {
              navigate("/fruitlist");
              setMobile(false);
            }}
          >
            Crop ▾
          </span>
          <ul className="dropdown-menu">
            {fruits.map((fruit) => (
              <li key={fruit.id}>
                <button
                  onClick={() => {
                    navigate(`/fruit/${fruit.id}`);
                    setMobile(false);
                  }}
                  className="dropdown-item"
                >
                  {fruit.name}
                </button>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMobile(false)}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
