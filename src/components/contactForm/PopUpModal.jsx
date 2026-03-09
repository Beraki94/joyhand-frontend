"use client";

import { useState } from "react";
import { PiXBold, PiFactoryDuotone, PiChatsCircleDuotone } from "react-icons/pi";
import "./PopUpModal.css";

const PopUpModal = ({ isOpen, onClose, mode = "quote" }) => {
  const isQuote = mode === "quote";

  // Initializing state directly. 
  // Because we will use a "key" in the parent, this resets automatically.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    orderVolume: "",
    message: ""
  });

  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const errors = {};
    if (formData.firstName.trim().length < 2) errors.firstName = true;
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = true;
    if (isQuote && !formData.companyName.trim()) errors.companyName = true;
    if (formData.message.trim().length < 10) errors.message = true;
    return errors;
  };

  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allFields = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allFields);

    if (Object.keys(errors).length > 0) return;

    setStatus("loading");
    try {
      const response = await fetch("https://formspree.io", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, mode })
      });
      if (response.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}><PiXBold size={24} /></button>
        
        <header className="modal__header">
          <div className="modal__icon-box">
            {isQuote ? <PiFactoryDuotone size={48} /> : <PiChatsCircleDuotone size={48} />}
          </div>
          <h3 className="modal__title">{isQuote ? "Request OEM/ODM Quote" : "Contact Our Team"}</h3>
        </header>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="modal__grid">
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} 
              className={touched.firstName && errors.firstName ? "modal__input modal__input--error" : "modal__input"} />
            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="modal__input" />
          </div>

          <input type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} onBlur={handleBlur}
            className={touched.email && errors.email ? "modal__input modal__input--error" : "modal__input"} />

          {isQuote && (
            <div className="modal__grid">
              <input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} onBlur={handleBlur}
                className={touched.companyName && errors.companyName ? "modal__input modal__input--error" : "modal__input"} />
              <select name="orderVolume" className="modal__input" onChange={handleChange} value={formData.orderVolume}>
                <option value="">Volume</option>
                <option value="100-1000">100-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>
          )}

          <textarea name="message" placeholder="Message..." rows="4" value={formData.message} onChange={handleChange} onBlur={handleBlur}
            className={touched.message && errors.message ? "modal__input modal__input--error" : "modal__input"} />

          <button type="submit" className="btn btn--primary modal__submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit"}
          </button>
          
          {status === "success" && <p className="modal__status--success">Sent Successfully! 🎉</p>}
        </form>
      </div>
    </div>
  );
};

export default PopUpModal;
