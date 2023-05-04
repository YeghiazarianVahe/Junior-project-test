import React from "react";
import logo from "./assets/Vector.png";
import "./Footer.css";
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
import tweeter from "./assets/tweeter.png";
import instagram from "./assets/instagram.png";
import list from "./assets/icon.png";

const Footer = () => {
  return (
    <>
      <div className="footerMain">
        <div className="footer">
          <div className="block1">
            <div className="logo">
              <img src={logo} alt="This is logo" />
              <span>Pages</span>
            </div>
            <div className="social-icons">
              <span className="icon">
                <img src={facebook} alt="Facebook icon" />
              </span>
              <span className="icon">
                <img src={tweeter} alt="Tweeter icon" />
              </span>
              <span className="icon">
                <img src={linkedin} alt="LinedIn icon" />
              </span>
              <span className="icon">
                <img src={instagram} alt="Instagram icon  " />
              </span>
            </div>
          </div>
          <div className="block2">
            <div className="title">Explore</div>
            <div className="block">
              <img src={list} alt="" />
              Home
            </div>
            <div className="block">
              <img src={list} alt="" />
              About Us
            </div>
            <div className="block">
              <img src={list} alt="" />
              Services
            </div>
            <div className="block">
              <img src={list} alt="" />
              Appointments
            </div>
            <div className="block">
              <img src={list} alt="" />
              Blog
            </div>
            <div className="block">
              <img src={list} alt="" />
              Contact Us
            </div>
          </div>
          <div className="block3">
            <div className="title">Utility Pages</div>
            <div className="block">
              <img src={list} alt="" />
              Start here
            </div>
            <div className="block">
              <img src={list} alt="" />
              Style guide
            </div>
            <div className="block">
              <img src={list} alt="" />
              404 not found
            </div>
            <div className="block">
              <img src={list} alt="" />
              Password protected
            </div>
            <div className="block">
              <img src={list} alt="" />
              Licenses
            </div>
            <div className="block">
              <img src={list} alt="" />
              Changelog
            </div>
          </div>
          <div className="block4">
            <div className="title">Keep in Touch</div>
            <div className="block">
              <p>Address:</p>
              <span>24A Kingston St, Los Vegas NC 28202, USA.</span>
            </div>
            <div className="block">
              <p>Mail :</p>
              <span>support@doctors.com</span>
            </div>
            <div className="block">
              <p>Phone :</p>
              <span>(+22) 123 - 4567 - 900</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="copy">
          &copy; Drafted by <strong>Victorflow</strong> - Powered by{" "}
          <strong>Webflow</strong>
        </div>
      </div>
    </>
  );
};

export default Footer;
