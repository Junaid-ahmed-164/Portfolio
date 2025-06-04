import React, { useState } from "react";
import { FaCode, FaMobileAlt, FaGlobe, FaInstagram } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const [showFormIndex, setShowFormIndex] = useState(null);
  const [formData, setFormData] = useState({});

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Custom, responsive websites using React, Django & more.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Cross-platform mobile apps with Flutter for Android & iOS.",
    },
    {
      icon: <FaGlobe />,
      title: "Full-Stack Solutions",
      desc: "Complete solutions from frontend to backend integration.",
    },
    {
      icon: <FaInstagram />,
      title: "Social Media Management",
      desc: "Manage your social media presence with our expert team.",
    },
  ];

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        [name]: value,
      },
    }));
  };

  const handleFormSubmit = async (e, index, serviceTitle) => {
    e.preventDefault();
    const dataToSend = {
      ...formData[index],
      service: serviceTitle,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/service/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      alert("Service request submitted successfully!");
      setFormData((prevData) => ({
        ...prevData,
        [index]: { name: "", email: "", message: "" },
      }));
      setShowFormIndex(null);
    } catch (error) {
      console.error("Error submitting service request:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button
              className="quote-btn"
              onClick={() =>
                setShowFormIndex(showFormIndex === index ? null : index)
              }
            >
              Get Quote
            </button>

            {showFormIndex === index && (
              <form
                className="quote-form"
                onSubmit={(e) => handleFormSubmit(e, index, service.title)}
              >
                <input
                  type="text"
                  name="name"
                  value={formData[index]?.name || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData[index]?.email || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  value={formData[index]?.message || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Describe what you need..."
                  rows="4"
                  required
                />
                <button type="submit" className="submit-quote">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
