import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.scss";

const WhatsAppButton = () => {
  const phoneNumber = "919731543787"; // replace with your WhatsApp number (with country code)

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button className="whatsapp-fab" onClick={openWhatsApp}>
      <FaWhatsapp />
    </button>
  );
};

export default WhatsAppButton;
