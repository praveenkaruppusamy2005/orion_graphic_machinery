import React, { useEffect, useRef } from "react";
import '../css/Second.css';
const Second = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (sectionRef.current) {
        sectionRef.current.style.setProperty('--parallax', `${Math.round(y * 0.2)}px`);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section ref={sectionRef} className="second-container">
      <div className="second-inner">
        <div className="hero-content">
          <p className="hero-kicker">FORGING THE FUTURE</p>
          <h2 className="hero-title">MANUFACTURING<br/>YOUR VISION</h2>
          <p className="hero-sub">
            Whether it's small-scale custom work or large-scale
            production we build with purpose, power & precision.
          </p>
          <button className="hero-cta" type="button">
            <span className="hero-cta-icon" aria-hidden>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="hero-cta-text">Discover More</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Second;
