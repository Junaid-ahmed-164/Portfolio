import React from "react";
import "./About.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

const About = () => {
  const projects = [
    { id: 1, title: "Portfolio Website" },
    { id: 2, title: "E-commerce Website" },
    { id: 3, title: "Blog CMS with Django" },
  ];

  return (
    <div className="container my-5 pt-5" id="about">
      {/* About Me Section */}
      <div className="text-center mb-5">
        <h2 className="gradient-text fw-bold">About Me</h2>
        <p className="lead text-muted w-75 mx-auto">
          Hi, I’m <strong>Junaid</strong> — a passionate Full-Stack Developer
          specializing in React.js, Django, and Flutter. I love building
          intuitive, responsive, and user-focused applications.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-5">
        <h4 className="text-primary mb-4">Skills</h4>
        <div className="d-flex flex-wrap gap-4">
          <Skill icon={<FaReact />} name="React.js" />
          <Skill icon={<FaNodeJs />} name="Node.js" />
          <Skill icon={<FaDatabase />} name="MongoDB" />
          <Skill icon={<FaHtml5 />} name="HTML5" />
          <Skill icon={<FaCss3Alt />} name="CSS3" />
          <Skill icon={<FaJs />} name="JavaScript" />
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-5">
        <h4 className="text-primary mb-4">Experience</h4>
        <div className="border-start ps-4">
          <div className="mb-4">
            <h6 className="fw-bold">MERN Stack Developer Intern</h6>
            <p className="text-muted mb-1">Caprigesoft — 2025</p>
            <p>Worked on full-stack web apps using React, Node.js, and MongoDB.</p>
          </div>
          <div className="mb-4">
            <h6 className="fw-bold">Freelance Web Developer</h6>
            <p className="text-muted mb-1">Upwork / Fiverr — 2024–2025</p>
            <p>Developed various client-based websites using MERN and Django.</p>
          </div>
        </div>
      </div>

      {/* Projects Section (Hardcoded) */}
      <div className="mb-5">
        <h4 className="text-primary mb-4">Highlighted Projects</h4>
        <ul className="list-group">
          {projects.map((project) => (
            <li key={project.id} className="list-group-item">
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skill = ({ icon, name }) => (
  <div className="text-center">
    <div className="display-5 text-primary">{icon}</div>
    <p className="fw-medium mt-2">{name}</p>
  </div>
);

export default About;
