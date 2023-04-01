import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          87-135 Brompton Rd, London, England, UK, SW1X 7XL UK
        </p>
        <p className="p__opensans">+44 0212-344-1231</p>
        <p className="p__opensans">+44 0212-555-1232</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <p className="p__opensans">Find Us on Social Media</p>

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2023 All Rights reserved®</p>

      <a href="https://github.com/devMoAli">
        <p className="p__opensans-contact">
          <span>Contact</span> 📧 dev.Mohamed Ali
        </p>
      </a>
    </div>
  </div>
);

export default Footer;
