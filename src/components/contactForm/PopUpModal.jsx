"use client";

import { useState, useEffect } from "react";
import { PiXBold, PiFactoryDuotone, PiChatsCircleDuotone, PiCheckCircleFill, PiWarningCircleFill } from "react-icons/pi";
import "./PopUpModal.css";

const PopUpModal = ({ isOpen, onClose, mode = "quote" }) => {
  const isQuote = mode === "quote";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    orderVolume: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [touched, setTouched] = useState({});

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API Call
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close Modal">
          <PiXBold size={20} />
        </button>
        
        <header className="modal__header">
          <div className="modal__nfc-visual">
            <div className="modal__nfc-ring"></div>
            <div className="modal__icon-box">
              {isQuote ? <PiFactoryDuotone size={40} /> : <PiChatsCircleDuotone size={40} />}
            </div>
          </div>
          <h3 className="modal__title">
            {isQuote ? "Request OEM/ODM Quote" : "Technical Consultation"}
          </h3>
          <p className="modal__subtitle">
            {isQuote ? "Specify your requirements for custom battery systems." : "Get direct access to our engineering team."}
          </p>
        </header>

        {status === "success" ? (
          <div className="modal__success-state">
            <PiCheckCircleFill size={60} className="modal__success-icon" />
            <h4>Request Received</h4>
            <p>Our engineers will review your specs and contact you within 24 hours.</p>
            <button className="btn btn--primary" onClick={onClose}>Close Terminal</button>
          </div>
        ) : (
          <form className="modal__form" onSubmit={handleSubmit}>
            <div className="modal__grid">
              <div className="modal__field">
                <input name="firstName" placeholder="First Name" required className="modal__input" onChange={handleChange} />
              </div>
              <div className="modal__field">
                <input name="lastName" placeholder="Last Name" required className="modal__input" onChange={handleChange} />
              </div>
            </div>

            <input type="email" name="email" placeholder="Business Email" required className="modal__input" onChange={handleChange} />

            {isQuote && (
              <div className="modal__grid">
                <input name="companyName" placeholder="Company Name" required className="modal__input" onChange={handleChange} />
                <select name="orderVolume" className="modal__input" onChange={handleChange}>
                  <option value="">Expected Volume</option>
                  <option value="100-1000">100 - 1000 Units</option>
                  <option value="1000+">1000+ Units</option>
                </select>
              </div>
            )}

            <textarea name="message" placeholder="Technical requirements or message..." rows="4" required className="modal__input" onChange={handleChange} />

            <button type="submit" className="btn btn--primary modal__submit" disabled={status === "loading"}>
              {status === "loading" ? "Processing Transmission..." : "Transmit Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopUpModal;
