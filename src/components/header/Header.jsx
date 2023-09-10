import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="nav_logo">
          <img
            className="nav_logo_icon"
            src={logo}
            width="45"
            alt=" app Logo"
          />
          <span className="nav_logo_text">Product List App</span>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Header;
