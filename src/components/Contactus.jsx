import React from "react";
import "../css/Contactus.css";
import { FaUserTie, FaMapMarkerAlt, FaPhoneAlt, FaSms } from "react-icons/fa";

export default function Contactus() {
  return (
    <div className="contactus-modern-container" style={{ flexDirection: 'column', gap: '0' }}>
      <div style={{ display: 'flex', width: '100%', gap: '3rem' }}>
        <div className="contactus-modern-left">
          <span className="contactus-modern-label">CONTACT US</span>
          <h1 className="contactus-modern-heading">Have a project in mind?<br />Get in touch!</h1>
          <form className="contactus-modern-form">
            <div className="contactus-modern-row">
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Your Email *" required />
            </div>
            <div className="contactus-modern-row">
              <input type="text" placeholder="Your Phone *" required />
              <input type="text" placeholder="Subject *" required />
            </div>
            <textarea placeholder="Comment *" required rows={4} />
            <button type="submit" className="contactus-modern-submit">Contact Now</button>
          </form>
        </div>
        <div className="contactus-modern-right">
          {/* Contact Person Section - Dark Background */}
          <div className="contactus-person-dark">
            <div className="contactus-person-row">
              <div>
                <div className="contactus-person-title">A Samuel Raj <span className="contactus-person-role">(Managing Partner)</span></div>
                <div className="contactus-person-address">
                  <FaMapMarkerAlt className="contactus-person-icon-sm" />
                  <span>Orion Graphic Machinery</span><br />
                  <span>2 C, Cheran Co. - Operative Industrial Estate Ltd, Kanuvai To Vadavalli Road, Coimbatore - 641108, Tamil Nadu, India</span>
                  <br />
                </div>
                <div className="contactus-person-contact">
                  <FaPhoneAlt className="contactus-person-icon-sm" />
                  <span className="contactus-person-phone">08046046335</span>
                  <a href="sms:08046046335" className="contactus-person-sms"><FaSms /> Send SMS</a>
                </div>
                <button className="dir-btn" onClick={() => window.open('https://maps.google.com/?q=11.04674000,76.90596000', '_blank')}>Get Direction</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div style={{ width: "100%", marginTop: "2.5rem", borderRadius: "18px", overflow: "hidden" }}>
        <iframe
          title="Orion Graphic Machinery Location"
          width="90%"
          height="400"
          style={{ border: 0, minHeight: '400px', display: 'block', alignSelf: 'center', margin: '0 auto', background: 'none', borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=11.04674,76.90596&t=k&hl=en&z=17&output=embed"
        ></iframe>
      </div>
    </div>
  );
}


