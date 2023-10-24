import React from "react";
import { useState } from "react";
import logo from "../assets/pngaaa.com-5644989.png";
import icon from "../assets/icons8-hamburger-50.png";
import Toggle from "./Toggle";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="navbar">
      <div className="navbar-first-part">
        <img src={logo} className="navbar-logo" alt="logo" />
        <a href="%">FoodFactory</a>
      </div>
      <input
        type="text"
        placeholder="Search Food..."
        className="navbar-input"
      />
      <Toggle />
      <img src={icon} onClick={handleClick} className="menu" alt="MenuIcon" />
      <div
        style={{
          position: "absolute",
          top: "70px",
          transition: "opacity 0.3s ease, 0s linear 0.3s",
        }}
      >
        {open && (
          <div className="toggle-part">
            <a href="%">Home</a>
            <a href="%">About</a>
            <a href="%">Trending</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
