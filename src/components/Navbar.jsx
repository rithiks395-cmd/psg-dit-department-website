import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, GraduationCap, Sparkles } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { PsgLogo3D } from './PsgLogo3D';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAcademicsDropdown(false);
    setMoreDropdown(false);
  }, [location]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(7, 10, 18, 0.92)' : 'rgba(15, 23, 42, 0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.35)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Top Mini Academic Bar */}
        <div style={{ backgroundColor: '#070A12', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', color: '#94A3B8', fontSize: '0.8rem', padding: '0.35rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              PSG Polytechnic College, Coimbatore - 641 004
            </span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://psgpolytech.ac.in" target="_blank" rel="noreferrer" style={{ color: '#E2E8F0', fontSize: '0.8rem' }}>
                Official College Web ↗
              </a>
              <a href="https://psgpolytech.ac.in/dept/dit.php" target="_blank" rel="noreferrer" style={{ color: '#00C2E8', textShadow: '0 0 8px rgba(0, 194, 232, 0.25)', fontWeight: 600, fontSize: '0.8rem' }}>
                Official DIT Source Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0.7rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          {/* Logo & Department Title */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '3px 5px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              flexShrink: 0
            }}>
              <PsgLogo3D height="46px" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ 
                fontFamily: 'Outfit, sans-serif', 
                fontWeight: 900, 
                fontSize: '1.025rem', 
                color: '#FFFFFF', 
                lineHeight: 1.15, 
                letterSpacing: '0.2px',
                whiteSpace: 'nowrap'
              }}>
                DEPARTMENT OF INFORMATION TECHNOLOGY
              </div>
              <div style={{ 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                color: '#00C2E8',
                textShadow: '0 0 8px rgba(0, 194, 232, 0.25)',
                letterSpacing: '0.8px',
                marginTop: '2px'
              }}>
                PSG POLYTECHNIC COLLEGE
              </div>
            </div>
          </Link>

          {/* Center Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'tech-nav-link active' : 'tech-nav-link')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'tech-nav-link active' : 'tech-nav-link')}>About</NavLink>

            {/* Academics Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setAcademicsDropdown(true)}
              onMouseLeave={() => setAcademicsDropdown(false)}
            >
              <NavLink
                to="/academics"
                className={({ isActive }) => (isActive ? 'tech-nav-link active' : 'tech-nav-link')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              >
                Academics <ChevronDown size={13} />
              </NavLink>

              {academicsDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '210px',
                  backgroundColor: '#0F172A',
                  borderRadius: '14px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '0.6rem 0',
                  zIndex: 100
                }}>
                  <Link to="/academics" style={dropdownLinkStyle}>All Semesters Overview</Link>
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '0.4rem 0' }} />
                  {['s1', 's2', 's3', 's4', 's5', 's6'].map((sem, idx) => (
                    <Link key={sem} to={`/academics/${sem}`} style={dropdownLinkStyle}>
                      Semester {idx + 1} Subjects
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/faculty" className={({ isActive }) => (isActive ? 'tech-nav-link active' : 'tech-nav-link')}>Faculty</NavLink>
            <NavLink to="/laboratories" className={({ isActive }) => (isActive ? 'tech-nav-link active' : 'tech-nav-link')}>Labs</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'tech-nav-link active' : 'tech-nav-link')}>Projects</NavLink>
            <NavLink to="/achievements" className={({ isActive }) => (isActive ? 'tech-nav-link active' : 'tech-nav-link')}>Achievements</NavLink>

            {/* More Navigation Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setMoreDropdown(true)}
              onMouseLeave={() => setMoreDropdown(false)}
            >
              <div
                className="tech-nav-link"
                style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', cursor: 'pointer' }}
              >
                More <ChevronDown size={13} />
              </div>

              {moreDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '190px',
                  backgroundColor: '#0F172A',
                  borderRadius: '14px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '0.6rem 0',
                  zIndex: 100
                }}>
                  <Link to="/news-events" style={dropdownLinkStyle}>News & Events</Link>
                  <Link to="/gallery" style={dropdownLinkStyle}>Photo Gallery</Link>
                  <Link to="/contact" style={dropdownLinkStyle}>Contact Us</Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Search Trigger Button */}
          <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                padding: '0.45rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                color: '#94A3B8',
                fontSize: '0.825rem',
                fontWeight: 500,
                border: '1px solid rgba(255, 255, 255, 0.14)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#00C2E8';
                e.currentTarget.style.backgroundColor = 'rgba(0, 194, 232, 0.10)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.color = '#94A3B8';
              }}
            >
              <Search size={15} color="#00C2E8" />
              <span>Search...</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="mobile-actions" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={() => setSearchOpen(true)} style={{ padding: '0.5rem', color: '#FFFFFF' }}>
              <Search size={22} color="#00C2E8" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ padding: '0.5rem', color: '#FFFFFF' }}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#0F172A',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Home</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">About Department</NavLink>
            <NavLink to="/academics" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Academics (S1 to S6)</NavLink>
            <NavLink to="/faculty" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Faculty & Staff</NavLink>
            <NavLink to="/laboratories" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Laboratories & Facilities</NavLink>
            <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Student Projects</NavLink>
            <NavLink to="/achievements" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Achievements & Rank Holders</NavLink>
            <NavLink to="/news-events" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">News & Events</NavLink>
            <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Photo Gallery</NavLink>
            <NavLink to="/academic-calendar" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Academic Calendar</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-tech-link">Contact Us</NavLink>
          </div>
        )}
      </header>

      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <style>{`
        .tech-nav-link {
          font-weight: 600;
          font-size: 0.875rem;
          color: #94A3B8;
          padding: 0.4rem 0.65rem;
          border-radius: 8px;
          transition: all 0.25s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .tech-nav-link:hover {
          color: #FFFFFF;
          text-shadow: 0 0 6px rgba(0, 194, 232, 0.20);
          background-color: rgba(255, 255, 255, 0.08);
        }
        .tech-nav-link.active {
          color: #00C2E8 !important;
          text-shadow: 0 0 8px rgba(0, 194, 232, 0.25);
          background-color: rgba(0, 194, 232, 0.08);
        }
        .mobile-tech-link {
          font-weight: 600;
          font-size: 1rem;
          color: #E2E8F0;
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        @media (max-width: 1180px) {
          .desktop-nav, .desktop-actions { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const dropdownLinkStyle = {
  display: 'block',
  padding: '0.55rem 1.25rem',
  fontSize: '0.85rem',
  color: '#94A3B8',
  fontWeight: '500',
  textDecoration: 'none',
  transition: 'all 0.2s ease'
};
