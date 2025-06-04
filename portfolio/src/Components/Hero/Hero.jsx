import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../../assets/profile.jpeg"; // update path if needed
import "./Hero.css"; // we'll add gradient styles here

const Hero = () => {
  return (
    <section className="bg-light py-5 text-center" id="home" >
      <div className="container d-flex flex-column align-items-center">
        {/* Profile Image */}
        <img
          src={Profile}
          alt="Profile"
          className="img-fluid rounded-circle mb-4"
          style={{ width: "250px", height: "250px", objectFit: "fill" }}
        />

        {/* Text Content */}
        <h1 className="fw-bold gradient-text">Hi, I'm Junaid</h1>
        <h4 className="text-primary">Full Stack Developer</h4>
        <p className="text-muted col-md-8">
          Passionate about building modern web applications using React, Django, and more. Let's create something great together.
        </p>

        {/* Buttons */}
        <div className="mt-3 d-flex flex-column flex-sm-row gap-3">
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
          <a
            href="../src/assets/Junaid CV.pdf"
            className="btn btn-outline-primary"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
