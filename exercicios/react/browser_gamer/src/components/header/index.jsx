import React from "react";
import { PiGameControllerDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="headerContainer">
      <h1 className="logo">
      <NavLink to="/"><PiGameControllerDuotone /> BBG </NavLink>
      </h1>

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
            <NavLink to="/signin" 
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" 
            >
              Subscribe
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
