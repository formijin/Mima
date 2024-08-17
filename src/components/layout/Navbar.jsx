import React from 'react'
import "./Navbar.css";
import Logo from "../../assets/images/Logo.png";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="link-set">
          <a href="">
            <img src={Logo} alt="" className="logo" />
          </a>
          <nav className="navbar-links">
            <a href="/">Products</a>
            <a href="/about">Stories</a>
            <a href="/services">Services</a>
            <a href="/contact">Support</a>
          </nav>
        </div>

        <div className="button-set">
          <Button variant="text" text="Sign In" />
          <Button variant="fill" text="Download the app" />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
