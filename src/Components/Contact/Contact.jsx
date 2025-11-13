
import React, { useState } from "react";
import "./Contact.css";
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3_ACCESS_KEY, // ✅ use env key here
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setIsSent(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h2>Send us a message</h2>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>

          <ul>
            <li>📧 contact@brightcampus.edu</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 Hyderabad, Telangana, India</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>
                <FaUser className="icon" /> Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>
                <FaPhoneAlt className="icon" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>
                <FaEnvelope className="icon" /> Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>
                <FaRegCommentDots className="icon" /> Write your messages here
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit now
            </button>

            {isSent && <p className="success-msg">✅ Email sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
