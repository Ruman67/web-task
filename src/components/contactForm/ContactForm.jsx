import React, { useState } from "react";
import "./ContactForm.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.aakashlabs.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row-first">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            className="field"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-row-second">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            className="field"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-row-third">
          <label>Message</label>
          <input
            type="text"
            name="message"
            className="field"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
