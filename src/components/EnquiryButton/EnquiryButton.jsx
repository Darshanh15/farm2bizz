import React, { useState } from "react";
import "./enquiry.scss";

function EnquiryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, phone, message } = formData;
    const phoneNumber = "91XXXXXXXXXX"; // 👉 Replace with your WhatsApp number
    const text = `Hello, I am ${name}. My phone number is ${phone}. Message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div>
      <button className="enquiry-btn" onClick={togglePopup}>
        Enquiry
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Contact Us</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="btn-group">
              <button onClick={sendToWhatsApp} className="send-btn">
                Send via WhatsApp
              </button>
              <button onClick={togglePopup} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnquiryButton;
