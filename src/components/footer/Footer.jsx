import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2025 Aakash Labs. All rights reserved.</p>
      <div>
        <a href="https://www.facebook.com/AakashGroupNepal">
          <FaFacebook />
        </a>

        <a href="https://www.instagram.com/aakash.group/">
          <IoLogoInstagram />
        </a>

        <a href="https://www.linkedin.com/company/aakashgroupnepal/">
          <IoLogoLinkedin />
        </a>
        <a href="https://www.aakash.group/">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Footer;
