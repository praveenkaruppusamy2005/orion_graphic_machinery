import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import '../css/Aboutus.css';
import aboutImg from '../assets/Machine.jpg';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
  
import {
  FaCheckCircle, FaLeaf, FaLightbulb, FaChevronLeft, FaChevronRight,
  FaArrowRight, FaListAlt, FaFlask, FaChartLine, FaCogs, FaPuzzlePiece,
  FaGlobeAsia, FaIndustry, FaUserTie, FaMapMarkerAlt, FaUsers, FaRegIdBadge,
  FaMoneyBillWave, FaUniversity, FaFileInvoice, FaHandshake, FaCreditCard, FaTruck
} from 'react-icons/fa';


/* ----------------------------------------------------------
   FIXED: CarouselReview component moved OUTSIDE AboutUs()
-----------------------------------------------------------*/
function CarouselReview() {
  const navigate = useNavigate();
  const reviews = [
    { avatar: 'L', stars: 5, date: '31-October-25', name: 'Lalson', location: 'Saudi Arabia', product: 'Paper Rewinding Machine', text: 'good', tags: ['Response', 'Quality', 'Delivery'] },
    { avatar: 'P', stars: 4, date: '11-October-25', name: 'Poornitha Chinnu Tipparna', location: 'Hyderabad, Telangana', product: 'Label Rewinder', text: '', tags: ['Response'] },
    { avatar: 'G', stars: 5, date: '26-September-25', name: 'G. Ramesh Kumar', location: 'Coimbatore, Tamil Nadu', product: 'Plotter Paper Rolls Rewinding Machine', text: '', tags: [] },
    { avatar: 'V', stars: 5, date: '06-January-25', name: 'Vijayalakshmi', location: 'Pavagada, Karnataka', product: 'Paper Sheet Cutting Machine', text: 'Excellent machine, fast delivery!', tags: ['Quality', 'Delivery'] },
    { avatar: 'U', stars: 5, date: '06-September-25', name: 'Udhaya Kumar', location: 'Sayapuram, Tamil Nadu', product: 'Paper Making Machines', text: 'Very responsive support.', tags: ['Response'] },
    { avatar: 'N', stars: 5, date: '05-September-25', name: 'N.Meenakshi Nathan', location: 'Tirunelveli, Tamil Nadu', product: 'Tape Cutting Machine', text: 'Highly recommend Orion!', tags: ['Quality'] },
    { avatar: 'P', stars: 5, date: '28-June-25', name: 'POONGODI', location: 'TNPL Pugalur, Tamil Nadu', product: 'Paper Roll Cutting Machine', text: 'Great after-sales service.', tags: ['Response', 'Delivery'] },
    { avatar: 'R', stars: 5, date: '18-February-25', name: 'Ramesh', location: 'Sri Lanka', product: 'Computer Stationery Printing Machine', text: 'Impressed with the product quality.', tags: ['Quality'] },
    { avatar: 'J', stars: 5, date: '03-February-25', name: 'Jagadisha', location: 'Mysore, Karnataka', product: 'Paper Printing Machines', text: 'Fast and reliable.', tags: ['Delivery'] },
    { avatar: 'S', stars: 5, date: '02-October-24', name: 'Som Shekhar', location: 'Bengaluru, Karnataka', product: 'Paper Slitting Machines', text: 'Good experience overall.', tags: ['Response', 'Quality'] },
    { avatar: 'O', stars: 5, date: '30-April-24', name: 'Oallabakash', location: 'Kadapa, Andhra Pradesh', product: 'Tape Cutting Machine', text: 'Quick response and delivery.', tags: ['Response', 'Delivery'] },
    { avatar: 'S', stars: 5, date: '31-October-23', name: 'Sujeetha', location: 'Salem, Tamil Nadu', product: 'Paper Sheet Cutting Machine', text: 'Very satisfied.', tags: ['Quality'] },
    { avatar: 'P', stars: 5, date: '08-March-23', name: 'Prasanna Suresh', location: 'Chennai, Tamil Nadu', product: 'Paper Sheeter', text: 'Professional team.', tags: ['Response', 'Quality'] },
    { avatar: 'S', stars: 5, date: '02-August-22', name: 'Shobha Reddy', location: 'Bengaluru, Karnataka', product: 'Slitting Rewinding Machine', text: 'Good support.', tags: ['Response'] },
    { avatar: 'G', stars: 5, date: '27-January-22', name: 'Guille Adou', location: 'Cote D Ivoire', product: 'Slitting Rewinding Machine', text: 'Thermal paper slitting machine works great.', tags: ['Quality'] },
    { avatar: 'J', stars: 5, date: '13-September-21', name: 'Jumam', location: 'Kollam, Kerala', product: 'Slitting Rewinding Machine', text: 'Case studies made the theory come alive.', tags: ['Quality', 'Delivery'] },
    { avatar: 'D', stars: 5, date: '28-June-20', name: 'Durai', location: 'Tamil Nadu', product: 'Paper Printing Machines', text: 'Good value for money.', tags: ['Quality'] },
    { avatar: 'S', stars: 5, date: '28-September-24', name: 'Sekar', location: 'Pune, Maharashtra', product: 'Paper Making Machines', text: 'Quick delivery.', tags: ['Delivery'] },
    { avatar: 'K', stars: 5, date: '23-September-24', name: 'Kumar M.', location: 'Coimbatore', product: 'BOPP Tape Slitting Machine', text: 'Great team.', tags: ['Response'] },
  ];

  return (
    <>
      <div style={{ width: '100vw', maxWidth: '100%', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 60, zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to right, #fff 80%, transparent)' }} />
        
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 60, zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to left, #fff 80%, transparent)' }} />
        <Marquee pauseOnHover={true} speed={30} gradient={false} className="testimonial-marquee">
          {reviews.map((review, idx) => (
                <div className="testimonial-carousel-review" key={idx} style={{ width: 400, height: 270, minWidth: 340, margin: '0 18px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px 0 rgba(60,80,120,0.08)', padding: '22px 24px 18px 24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxSizing: 'border-box', justifyContent: 'flex-start', overflow: 'hidden' }}>
                  <div className="testimonial-review-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div className="testimonial-review-avatar">{review.avatar}</div>
                        <div>
                          <div className="testimonial-review-name" style={{ fontWeight: 700 }}>{review.name}</div>
                          <div className="testimonial-review-location" style={{ color: '#888', fontSize: '0.98rem' }}>{review.location}</div>
                        </div>
                      </div>
                      <div className="testimonial-review-stars" style={{ marginLeft: 52, marginTop: 2 }}>{'\u2605'.repeat(review.stars)}{review.stars === 4 ? '\u2606' : ''}</div>
                    </div>
                    <div className="testimonial-review-date" style={{ marginLeft: 18, color: '#aaa', fontSize: '0.97rem', whiteSpace: 'nowrap' }}>{review.date}</div>
                  </div>
                  <div className="testimonial-review-product" style={{ marginTop: 10, fontWeight: 600 }}>{review.product}</div>
                  {review.text && <div className="testimonial-review-text" style={{ marginTop: 8, color: '#222', textAlign: 'left', fontSize: '1.01rem', lineHeight: 1.5 }}>{review.text}</div>}
                  {review.tags?.length > 0 && (
                    <div className="testimonial-review-tags" style={{ justifyContent: 'flex-start', marginTop: 8 }}>
                      {review.tags.map(tag => (
                        <span key={tag} style={{ marginRight: 12 }}>{tag} <span style={{ color: '#4caf50', marginLeft: 2 }}>&#128077;</span></span>
                      ))}
                    </div>
                  )}
                </div>
          ))}
        </Marquee>
      </div>
      <hr className="testimonial-divider" />
      <div className="testimonial-user-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <button className="testimonial-more-reviews-btn" onClick={() => navigate('/reviews')}>
          <span className="testimonial-more-reviews-icon"><FaArrowRight /></span>
          <span className="testimonial-more-reviews-text">More Reviews</span>
        </button>
      </div>
    </>
  );
}


/* ----------------------------------------------------------
   ABOUT US HERO
-----------------------------------------------------------*/
export function AboutUsHero() {
  return (
    <section className="aboutus-hero-banner">
      <div className="aboutus-hero-bg">
        <img src={aboutImg} alt="About Us Banner" />
        <div className="aboutus-hero-overlay" />
        <div className="aboutus-hero-center">
          <h1 className="aboutus-hero-heading">About Us</h1>
          <div className="aboutus-hero-breadcrumbs">
            <span>ORION</span>
            <span className="aboutus-hero-breadcrumb-dot" />
            <span>ABOUT US</span>
          </div>
        </div>
      </div>
    </section>
  );
}



export default function AboutUs() {

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [fadeState, setFadeState] = useState('');
  const searchBoxRef = useRef(null);

  const openSearch = () => {
    setFadeState('in');
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setFadeState('out');
    setTimeout(() => {
      setSearchOpen(false);
      setFadeState('');
    }, 350);
  };

  useEffect(() => {
    if (!searchOpen) return;

    const handleScroll = () => closeSearch();
    window.addEventListener('scroll', handleScroll);

    const handleClick = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        closeSearch();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [searchOpen]);


  return (
    <div className="aboutus-main">
      <Header />

      {/* Navigation Bar */}
      <nav className="top-nav-bar" style={{ position: 'relative' }}>
        <div className="top-nav-inner">
          <a href="/" className="top-nav-link active">HOME</a>
          <a href="/about" className="top-nav-link">About Us</a>
          <a href="#" className="top-nav-link">Our Product Range</a>
          <a href="#" className="top-nav-link">Contact Us</a>

          <div className="top-nav-search">
            {!searchOpen ? (
              <span className="top-nav-search-icon" onClick={openSearch} style={{ cursor: 'pointer' }}>
                <svg width="24" height="24" fill="none" stroke="#16222a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            ) : (
              <div style={{ position: 'relative' }} ref={searchBoxRef}>
                <div className={`top-nav-search-box${fadeState === 'out' ? ' hide' : ''}`}>
                  <span className="top-nav-search-icon">
                    <svg width="24" height="24" fill="none" stroke="#16222a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="top-nav-search-input"
                    placeholder="Search Products/Services"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    autoFocus
                    style={{ color: 'black' }}
                  />

                  <span className="search-modal-close" onClick={closeSearch}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                </div>

                <div className={`top-nav-search-dropdown${fadeState === 'out' ? ' hide' : ''}`}>
                  <div className="top-nav-search-dropdown-empty">
                    <div className="top-nav-search-dropdown-empty-icon">
                      <svg width="32" height="32" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="8" y="10" width="16" height="12" rx="4" /><path d="M12 16h8" />
                      </svg>
                    </div>
                    <div className="top-nav-search-dropdown-empty-text">Search here</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>


      <AboutUsHero />

      {/* WHY CHOOSE US */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-content no-image">
          <div className="why-choose-us-text">
            <span className="why-choose-us-label">WHY CHOOSE US</span>
            <h2 className="why-choose-us-heading">We work for you since 2015 Industrial around the world.</h2>

            <p className="why-choose-us-description">
              Established in the year 2015, Orion Graphic Machinery has emerged...
            </p>

            <ul className="why-choose-us-list">
              <li><FaCheckCircle className="why-choose-us-icon" /> Reliable Guarantees You Can Trust</li>
              <li><FaLeaf className="why-choose-us-icon" /> Commitment to Eco-Friendly Materials</li>
            </ul>
          </div>

          <div className="vision-box">
            <FaLightbulb className="vision-icon" />
            <h3>Our Vision</h3>
            <p>
              To be the most trusted manufacturer and exporter of industrial machinery...
            </p>
            <div className="vision-arrows">
              <FaChevronLeft />
              <FaChevronRight />
            </div>
          </div>
        </div>
      </section>


      {/* COMPANY PROFILE */}
      <section className="company-profile-section">
        <h2 style={{ textAlign: 'center' }}>Company Profile</h2>

        <div className="company-profile-grid">
          <div className="profile-item"><FaIndustry className="icon" /> <strong>Nature of Business:</strong> Manufacturer</div>
          <div className="profile-item"><FaIndustry className="icon" /> <strong>Additional Business:</strong> Manufacturing, Wholesale</div>
          <div className="profile-item"><FaUserTie className="icon" /> <strong>Company CEO:</strong> Samuel Raj</div>
          <div className="profile-item"><FaMapMarkerAlt className="icon" /> <strong>Registered Address:</strong> Coimbatore</div>
          <div className="profile-item"><FaUsers className="icon" /> <strong>Total Employees:</strong> 11–25 People</div>
          <div className="profile-item"><FaRegIdBadge className="icon" /> <strong>GST Registration:</strong> 01-07-2017</div>
          <div className="profile-item"><FaHandshake className="icon" /> <strong>Legal Status:</strong> Partnership</div>
          <div className="profile-item"><FaMoneyBillWave className="icon" /> <strong>Turnover:</strong> 1.5 – 5 Cr</div>
          <div className="profile-item"><FaRegIdBadge className="icon" /> <strong>IEC:</strong> 3216903168</div>
          <div className="profile-item"><FaUniversity className="icon" /> <strong>Banker:</strong> Indian Overseas Bank</div>
          <div className="profile-item"><FaFileInvoice className="icon" /> <strong>GST No:</strong> 33AAEFO5094L1ZY</div>
          <div className="profile-item"><FaCreditCard className="icon" /> <strong>Payment Mode:</strong> Cash, Online, Bank Transfer</div>
          <div className="profile-item"><FaTruck className="icon" /> <strong>Shipment:</strong> By Air, Road</div>
        </div>
      </section>


      {/* OUR TEAM */}
      <section className="our-team-section">
        <div className="our-team-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="pp">Our Team</p>
          <p className="ps">
            Our team is segregated into various units namely procurement, manufacturing, quality testing, warehousing & packaging, R and D and sales & marketing. Each of these units plays complement each other and help us achieve desired results. The dedication of our employees is contagious and helps motivate everyone to give 100% effort on a daily basis. As a closely-knit family, we organize workshops, training sessions and learning programs on a regular basis.

          </p>
        </div>
      </section>


      {/* WHY US */}
      <section className="why-us-section">
        <div className="why-us-inner">
          <h2 className="why-us-heading">Why Us?</h2>
          <p className="why-us-desc">We earned trust with consistent quality.</p>

          <ul className="why-us-list">
            <li><FaListAlt className="why-us-icon" /> Large Product Line</li>
            <li><FaFlask className="why-us-icon" /> Strong R&D</li>
            <li><FaChartLine className="why-us-icon" /> Good Financial Position</li>
            <li><FaCogs className="why-us-icon" /> Large Production Capacity</li>
            <li><FaPuzzlePiece className="why-us-icon" /> Custom Solutions</li>
          </ul>

          <div className="why-us-markets">
            <h3>Major Market</h3>
            <ul>
              <li><FaGlobeAsia className="why-us-icon" /> Sri Lanka</li>
              <li><FaGlobeAsia className="why-us-icon" /> UAE</li>
              <li><FaGlobeAsia className="why-us-icon" /> Nepal</li>
            </ul>
          </div>

          <div className="why-us-brands">
            <h3>Brands We Deal In</h3>
            <p>Our own manufacturing brand <strong>"Orion"</strong></p>
          </div>
        </div>
      </section>


      {/* TESTIMONIAL SECTION */}
       <section className="ratings-section">
        <div className="ratings-inner ratings-full" style={{ width: '100vw', maxWidth: '100%', margin: '0 auto', background: '#fff', borderRadius: '0', boxShadow: 'none', padding: '2.5rem 0 2.5rem 0' }}>
          <h2 className="ratings-heading" style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 800, color: '#111', marginBottom: '2.2rem', letterSpacing: '-1px' }}>Ratings & Reviews</h2>
          <div className="ratings-main-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div className="ratings-score-block" style={{ background: '#fff', borderRadius: '0', boxShadow: 'none', padding: '2.2rem 2.5rem', minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span className="ratings-score" style={{ fontSize: '2.8rem', fontWeight: 900, color: '#111' }}>4.4</span><span className="ratings-score-max" style={{ fontSize: '1.3rem', color: '#888', marginLeft: 6 }}>/5</span>
              <span className="ratings-stars" style={{ fontSize: '2.1rem', color: '#111', margin: '10px 0' }}>&#9733;&#9733;&#9733;&#9733;&#189;</span>
              <div className="ratings-users" style={{ color: '#111', fontWeight: 600, fontSize: '1.1rem', marginTop: 8 }}>Reviewed by 55 Users</div>
            </div>
            <div className="ratings-bars-block" style={{ flex: 1, minWidth: 260, maxWidth: 400 }}>
              {[
                { label: '5★', percent: 55 },
                { label: '4★', percent: 15 },
                { label: '3★', percent: 16 },
                { label: '2★', percent: 5 },
                { label: '1★', percent: 9 }
              ].map(bar => (
                <div className="ratings-bar-row" style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }} key={bar.label}>
                  <span style={{ width: 38, fontWeight: 700, color: '#111' }}>{bar.label}</span>
                  <div className="ratings-bar" style={{ flex: 1, height: 12, background: '#f4f4f4', borderRadius: 8, margin: '0 12px', overflow: 'hidden' }}>
                    <div className="ratings-bar-fill" style={{ width: `${bar.percent}%`, height: '100%', background: '#111', borderRadius: 8, transition: 'width 0.6s' }}></div>
                  </div>
                  <span style={{ width: 38, textAlign: 'right', color: '#111', fontWeight: 600 }}>{bar.percent}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ratings-satisfaction-block" style={{ marginTop: '2.5rem', background: '#fff', borderRadius: '0', boxShadow: 'none', padding: '2.2rem 2.5rem', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', marginBottom: 18, color: '#111' }}>User Satisfaction</h3>
            {[
              { label: 'Response', percent: 71 },
              { label: 'Quality', percent: 83 },
              { label: 'Delivery', percent: 80 }
            ].map(sat => (
              <div className="ratings-sat-row" style={{ display: 'flex', alignItems: 'center', marginBottom: 14 }} key={sat.label}>
                <span style={{ width: 90, fontWeight: 600, color: '#111' }}>{sat.label}</span>
                <div className="ratings-sat-bar" style={{ flex: 1, height: 12, background: '#f4f4f4', borderRadius: 8, margin: '0 12px', overflow: 'hidden' }}>
                  <div className="ratings-sat-fill" style={{ width: `${sat.percent}%`, height: '100%', background: '#111', borderRadius: 8, transition: 'width 0.6s' }}></div>
                </div>
                <span style={{ width: 38, textAlign: 'right', color: '#111', fontWeight: 700 }}>{sat.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-inner testimonial-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="testimonial-label">TO KNOW MORE ABOUT US</span>
          <h2 className="testimonial-heading">What Our Customers Say?</h2>

          <div className="testimonial-quote-icon">
            <span className="testimonial-quote">&#10077;</span>
          </div>

          {/* FIXED: Clean usage */}
          <CarouselReview />
        </div>
      </section>


      {/* RATINGS SECTION */}
     

    </div>
  );
}
