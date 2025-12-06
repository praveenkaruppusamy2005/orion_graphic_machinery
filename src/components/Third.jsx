import React, { useMemo, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/Third.css';
import left from '../assets/icons8-chevron-left-30.png';
import right from '../assets/icons8-chevron-right-30.png';

const Third = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  // Service icons as SVG components
  const ServiceIcons = {
    machine: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8h8v8H8V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12h2M18 12h2M12 4v2M12 18v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 6l2 2M16 6l-2 2M6 18l2-2M16 18l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    logistics: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 10h8M8 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    maintenance: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    quality: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12M3 7l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    automation: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v6m0 8v6M23 12h-6M7 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20.66 3.34l-4.24 4.24m-8.48 8.48l-4.24 4.24m16.96 0l-4.24-4.24m-8.48-8.48L3.34 3.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  };

  // Build 15 service items
  const items = useMemo(() => {
    const services = [
      { title: "Machine Analysis", description: "Data analysis technique that automates the creation of analytical models is machine", icon: "machine" },
      { title: "Comprehensive Logits", description: "Our solutions offer door-to-door services for the import & export of consumer and...", icon: "logistics" },
      { title: "Plant Maintenance", description: "High-end manufacturers are at the forefront of technological innovation, constantly...", icon: "maintenance" },
      { title: "Quality Control", description: "Ensuring the highest standards through rigorous testing and inspection processes...", icon: "quality" },
      { title: "Automation Systems", description: "Advanced automation solutions that streamline production and increase efficiency...", icon: "automation" },
      { title: "Machine Analysis", description: "Data analysis technique that automates the creation of analytical models is machine", icon: "machine" },
      { title: "Comprehensive Logits", description: "Our solutions offer door-to-door services for the import & export of consumer and...", icon: "logistics" },
      { title: "Plant Maintenance", description: "High-end manufacturers are at the forefront of technological innovation, constantly...", icon: "maintenance" },
      { title: "Quality Control", description: "Ensuring the highest standards through rigorous testing and inspection processes...", icon: "quality" },
      { title: "Automation Systems", description: "Advanced automation solutions that streamline production and increase efficiency...", icon: "automation" },
      { title: "Machine Analysis", description: "Data analysis technique that automates the creation of analytical models is machine", icon: "machine" },
      { title: "Comprehensive Logits", description: "Our solutions offer door-to-door services for the import & export of consumer and...", icon: "logistics" },
      { title: "Plant Maintenance", description: "High-end manufacturers are at the forefront of technological innovation, constantly...", icon: "maintenance" },
      { title: "Quality Control", description: "Ensuring the highest standards through rigorous testing and inspection processes...", icon: "quality" },
      { title: "Automation Systems", description: "Advanced automation solutions that streamline production and increase efficiency...", icon: "automation" }
    ];
    
    return services.map((service, i) => ({
      id: i + 1,
      ...service,
      src: new URL('../assets/sample.jpg', import.meta.url).href
    }));
  }, []);

  return (
    <section className="third-container">
      <div className="third-inner">
        <div className="section-header">
          <div className="section-header-left">
            <p className="section-kicker">
              <span className="kicker-square"></span>
              OUR SERVICES
            </p>
            <h3 className="section-title">We create personalized manufacturing plans</h3>
          </div>
          <div className="section-header-right">
            <button 
              type="button" 
              className="header-nav-btn prev-header" 
              onClick={() => {
                const newIndex = selectedItem > 0 ? selectedItem - 1 : items.length - 1;
                setSelectedItem(newIndex);
              }}
              aria-label="Previous"
            >
              <img src={left} alt="Previous" />
            </button>
            <button 
              type="button" 
              className="header-nav-btn next-header" 
              onClick={() => {
                const newIndex = selectedItem < items.length - 1 ? selectedItem + 1 : 0;
                setSelectedItem(newIndex);
              }}
              aria-label="Next"
            >
              <img src={right} alt="Next" />
            </button>
          </div>
        </div>
        <Carousel
          selectedItem={selectedItem}
          onChange={setSelectedItem}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={25}
          swipeable={true}
          interval={3000}
        >
          {items.map(item => {
            const IconComponent = ServiceIcons[item.icon] || ServiceIcons.machine;
            return (
              <div key={item.id} className="card">
                <div className="card-media">
                  <img src={item.src} alt={item.title} />
                  <div className="card-badge">
                    <IconComponent />
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-sub">{item.description}</p>
                  <a href="#" className="card-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default Third;