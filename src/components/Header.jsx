import React from "react";
import '../css/Header.css';
import logo from  '../assets/OGM.png';
import phoneIcon from '../assets/icons8-phone-100.png';
import locationIcon from '../assets/icons8-location-100.png';
import mailIcon from '../assets/icons8-mail-100.png';
const Header = () => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="brand">
          <img className="brand-logo" src={logo} alt="Logo" />
          <h1 className="brand-name">Orion Graphics Machinery</h1>
          <span className="brand-sep" aria-hidden>│</span>
        </div>

        <nav className="header-actions">
          <button className="action-btn" type="button">
            <span className="action-icon"><img src={phoneIcon} alt="Phone" /></span>
            <span className="action-text">
              <span className="action-title">NEED TO TALK</span>
              <span className="action-detail">08046046335</span>
            </span>
          </button>

          <button className="action-btn" type="button">
            <span className="action-icon"><img src={locationIcon} alt="Location" /></span>
            <span className="action-text">
              <span className="action-title">MAIN LOCATION</span>
              <span className="action-detail">Coimbatore-641108</span>
            </span>
          </button>

          <button className="action-btn" type="button">
            <span className="action-icon"><img src={mailIcon} alt="Email" /></span>
            <span className="action-text">
              <span className="action-title">EMAIL ADDRESS</span>
              <span className="action-detail">no-reply@example.com</span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;