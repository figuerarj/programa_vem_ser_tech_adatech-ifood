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
          <li className="header_li">
            <NavLink
              to="/games"
              >
              Games
            </NavLink>
          </li>
          <li className="header_li">
            <NavLink to="/login" 
            >
              Login
            </NavLink>
          </li>
          <li className="header_li">
            <NavLink
              to="/subscribe"
              >
              Subscribe
            </NavLink>
          </li>
          <li className="header_li">
            <NavLink to="/search" 
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="button_link">
        <NavLink to="/contact">Contact</NavLink>
      </button>
    </header>
  );
};

export default Header;
