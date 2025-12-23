// pages/Contact.jsx
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to send message");

      setStatus({ type: "success", message: data.message });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Remove success message after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    }
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: "Email", content: "Globesnaps@gmail.com", link: "mailto:Globesnaps@gmail.com" },
    { icon: <Phone size={24} />, title: "Phone", content: "+92 317 9388314", link: "tel:+923179388314" },
    { icon: <MapPin size={24} />, title: "Location", content: "Pakistan", link: null },
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-description">
              Reach out to us through any of these channels, or fill out the form and we'll get back to you soon.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-info-card">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3 className="info-card-title">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="info-link">{info.content}</a>
                    ) : (
                      <p className="info-text">{info.content}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <Card className="contact-form-card">
              <h2 className="form-title">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Your message..."
                    rows="6"
                    required
                  />
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  className="submit-button"
                  icon={<Send size={18} />}
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
