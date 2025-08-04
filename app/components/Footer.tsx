import React from 'react'
import '../styles/Footer.css'
import logo from "../images/logo.png"
import fbLogo from '../images/greenFB.png';
import igLogo from '../images/greenInsta.png';
import ytLogo from '../images/greenYoutube.png';
import liLogo from '../images/greenLinkedin.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="logo-section">
              <Image src={logo} alt="P23 Africa" className="footer-logo" />
            </div>
            <p className="company-description">
              P23 Africa LTD is registered in the United Kingdom. Company No: 15246700
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Who We Are</h3>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Business Referral Network</a></li>
              <li><a href="/">University Partnership</a></li>
              <li><a href="/">The 54th Pitch</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">What We Do</h3>
            <ul className="footer-links">
              <li><a href="/">Business Strategy</a></li>
              <li><a href="/">Market Entry</a></li>
              <li><a href="/">Business Research</a></li>
              <li><a href="/">Sales</a></li>
              <li><a href="/">Marketing</a></li>
              <li><a href="/">Business Audit</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <Image src={liLogo} alt="LinkedIn" />
              </a>
              <a href="#" className="social-link">
                <Image src={fbLogo} alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <Image src={igLogo} alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <Image src={ytLogo} alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="footer-section newsletter-section">
            <h3 className="footer-heading">Subscribe to get Updates</h3>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="email-input"
              />
              <button className="subscribe-btn">
                Subscribe
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            ©P23 Africa 2025 • Privacy Policy • Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer