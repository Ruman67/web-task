import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

function footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="social-links">
          <h3>Follow Us On</h3>
          <a
            href="https://www.facebook.com/AakashGroupNepal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/aakash.group/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/aakashgroupnepal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://www.aakash.group/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="contact-info">
          <h3>CONTACT US</h3>
          <p>
            <strong>Address:</strong> Laxmi Plaza, Putalisadak Kathmandu
          </p>
          <p>
            <strong>Phone:</strong> +977-1-4430196
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@aakash.group">info@aakash.group</a>
          </p>
          <p>
            <strong>Opening Hours:</strong> Sunday to Friday (10:00 AM to 6:00
            PM)
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Aakash Labs. All rights reserved.</p>
      </div>
    </div>
  );
}

export default footer;
