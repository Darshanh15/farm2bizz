import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // On submit, redirect to WhatsApp with message
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, company, message } = formData;

    // Create the WhatsApp message text
    const text = `Hello, I want to contact you.
Name: ${name}
Phone: ${phone}
Email: ${email}
Company: ${company}
Message: ${message}`;

    // Encode message for URL
    const encodedText = encodeURIComponent(text);

    // WhatsApp API link
    const whatsappLink = `https://wa.me/919739199919?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
     <div>
        <SectionTitle backgroundText="FARMS2Bizz" title="Contact Us" />
      </div>
    <section className="contact-section">
      <div className="contact-left">
        <p className="contact-subtitle">GET IN TOUCH</p>
        <h2 className="contact-title">Please Contact Us</h2>

        <div className="contact-box">
          <div className="contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <div>
              <h4>Address</h4>
              <p>#3/4, 6/4, Defence Colony, Chimasandra, Bidarahalli Hobli, <br />Virgonagar Post, <br /> Bangalore -560049</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-box"><FaPhoneAlt /></div>
            <div>
              <h4>Phone</h4>
              <p>+91 9739199919</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-box"><FaEnvelope /></div>
            <div>
              <h4>Email</h4>
              <p>Sales@farms2bizz.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
            <input type="text" name="company" placeholder="Company" onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Your Message" rows="5" onChange={handleChange}></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;
