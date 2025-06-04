import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/contact/", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      alert("Failed to send message.");
      console.error(err);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-content container">
        {/* Contact Info */}
        <div className="contact-info">
          <p><FaEnvelope className="icon" /> juttkhan522@gmail.com</p>
          <p><FaPhoneAlt className="icon" /> +92 321 6048964</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Social Media Links */}
        <section className="social-links" id="connect">
          <h4>Connect with Me</h4>
          <div className="icons">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Junaid-ahmed-164/movie-app.git" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/junnaiidd_?igsh=cWh4c2Q0dnVjaThp" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
