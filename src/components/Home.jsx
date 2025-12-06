import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import '../css/Home.css'
import '../css/TopInfoBar.css'
import '../css/TopNavBar.css'
import '../css/TopNavBar.css'
import { FaChevronDown } from 'react-icons/fa';

function Home() {
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
    }, 350); // match keyframes duration
  };

  useEffect(() => {
    if (!searchOpen) return;
    const handleScroll = () => closeSearch();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <>
      <Header/>
      <nav className="top-nav-bar" style={{position: 'relative'}}>
        <div className="top-nav-inner">
          <a href="/" className="top-nav-link active">HOME</a>
          <a href="#" className="top-nav-link">About Us</a>
          <a href="#" className="top-nav-link">Our Product Range</a>
          <a href="#" className="top-nav-link">CONTACT US</a>
          <div className="top-nav-search">
            {!searchOpen ? (
              <span className="top-nav-search-icon" onClick={openSearch} style={{cursor:'pointer'}}>
                <svg width="24" height="24" fill="none" stroke="#16222a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
            ) : (
              <div style={{position:'relative'}} ref={searchBoxRef}>
                <div className={`top-nav-search-box${fadeState === 'out' ? ' hide' : ''}`}> {/* fade in/out */}
                  <span className="top-nav-search-icon">
                    <svg width="24" height="24" fill="none" stroke="#16222a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </span>
                  <input
                    type="text"
                    className="top-nav-search-input"
                    placeholder="Search Products/Services"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    autoFocus
                    style={{color:'black'}}
                  />
                  <span className="search-modal-close" onClick={closeSearch}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                </div>
                <div className={`top-nav-search-dropdown${fadeState === 'out' ? ' hide' : ''}`}> {/* fade in/out */}
                  <div className="top-nav-search-dropdown-empty">
                    <div className="top-nav-search-dropdown-empty-icon">
                      <svg width="32" height="32" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="10" width="16" height="12" rx="4"/><path d="M12 16h8"/></svg>
                    </div>
                    <div className="top-nav-search-dropdown-empty-text">Search here</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Second/>
      <Third/>
      <Fourth/>
    </>
  )
}

export default Home
