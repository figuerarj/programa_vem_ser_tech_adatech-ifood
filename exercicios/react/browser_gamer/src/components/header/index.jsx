import React from "react";
import { PiGameControllerDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="hero-container">
      <div className="environment"></div>
      <NavLink className="flex" to="/">
      <PiGameControllerDuotone className="size"/>
      {/* <h1 className="logo">
       BBG 
      </h1> */}
      <h1 className="hero glitch layers" data-text="BBG"><span>BBG</span></h1>
      </NavLink>
      </div>
      <nav>
        <ul className={"nav__links"}>
          <li>
            <NavLink
              to="/games"
              >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" 
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscribe"
              >
              Subscribe
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" 
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
      <button>
        <NavLink to="/contact">Contact</NavLink>
      </button>
    </header>
  );
};

export default Header;
