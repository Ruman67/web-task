import React from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
const NavBar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Logo" height="40rem" width="65rem" />
    </div>
    <div className="nav-links">
      <a href="#about">About Us</a>
      <a href="#our-team">Our Team</a>
      <a href="#contact">Contact Us</a>
    </div>
  </nav>
);

export default NavBar;
