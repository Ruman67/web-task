import React from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Logo" height="40rem" width="65rem" />
    </div>
    <div className="nav-links">
      <Link to="/about">About Us</Link>
      <Link to="/team">Our Team</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </nav>
);

export default NavBar;
