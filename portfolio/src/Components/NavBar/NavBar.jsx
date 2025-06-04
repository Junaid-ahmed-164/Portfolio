import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo.png";
import "../NavBar/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar bg-white shadow-sm py-3 sticky-top" style={{ height: "100px" }}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <img
          src={Logo}
          alt="Logo"
          style={{
            maxHeight: "100px",   // Keeps logo inside navbar height
            width: "auto",       // Maintains aspect ratio
            objectFit: "contain",
            paddingBottom:"20px"
          }}
          
        />



        {/* Center: Menu */}
        <ul className="nav mx-auto gap-4 fw-semibold text-uppercase">
          <li className="nav-item">
            <a className="nav-link text-dark hover-underline" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark hover-underline" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark hover-underline" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark hover-underline" href="#latestwork">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark hover-underline" href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right: Connect Button */}
        <div>
          <a href="#connect" className="btn btn-outline-primary px-4 py-2 fw-semibold rounded-pill">
  Connect With Me
</a>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
