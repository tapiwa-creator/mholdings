import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .nav-link {
          position: relative;
          color: rgba(10,15,30,0.6);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 2px;
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }
        .nav-link::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #c9a84c; border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #c9a84c; }
        .nav-link:hover::after { width: 100%; }

        .contact-btn {
          background: linear-gradient(135deg, #c9a84c, #e8c97a);
          color: #0a0f1e !important;
          padding: 9px 22px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          transition: transform 0.2s, opacity 0.2s;
          letter-spacing: 0.02em;
        }
        .contact-btn:hover { transform: translateY(-1px); opacity: 0.92; }
        .contact-btn::after { display: none !important; }

        .mobile-link {
          display: block;
          color: rgba(10,15,30,0.6);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          transition: background 0.15s, color 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .mobile-link:hover { background: rgba(201,168,76,0.1); color: #c9a84c; }

        .mobile-menu {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        .hamburger-btn {
          background: none; border: none; cursor: pointer;
          padding: 8px; border-radius: 8px;
          color: rgba(10,15,30,0.6);
          transition: background 0.15s, color 0.15s;
        }
        .hamburger-btn:hover { background: rgba(201,168,76,0.1); color: #c9a84c; }

        .desktop-nav { display: flex; }
        .mobile-only  { display: none; }

        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-only  { display: block; }
        }
      `}</style>

      <header style={{
        background: 'rgba(226,221,212,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201,168,76,0.22)',
        position: 'sticky', top: 0, zIndex: 50,
        fontFamily: "'DM Sans', sans-serif"
      }}>
        <div style={{ width: '100%', boxSizing: 'border-box', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>

            {/* Logo */}
            <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none' }}>
              <img src="/logo.jpg" alt="ElevateLT" style={{ height: '62px', width: 'auto', display: 'block' }} />
              <div style={{ marginLeft: '-10px' }}>
                <div style={{ fontSize: '17px', fontWeight: 600, color: '#0a0f1e', lineHeight: 1.2 }}>ElevateLT</div>
                <div style={{ fontSize: '12px', color: '#c9a84c', fontWeight: 400, letterSpacing: '0.05em' }}>Excellence in Business</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/projects" className="nav-link">Featured Projects</Link>
              <Link to="/contact" className="nav-link contact-btn">Contact</Link>
            </nav>

            {/* Mobile hamburger */}
            <button onClick={toggleMenu} className="hamburger-btn mobile-only" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {isMenuOpen
                  ? <path d="M6 18L18 6M6 6l12 12" />
                  : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu" style={{ maxHeight: isMenuOpen ? '300px' : '0', opacity: isMenuOpen ? 1 : 0 }}>
            <nav style={{ padding: '0.5rem 0 1rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
              <Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link>
              <Link to="/services" className="mobile-link" onClick={closeMenu}>Services</Link>
              <Link to="/projects" className="mobile-link" onClick={closeMenu}>Featured Projects</Link>
              <Link to="/contact" className="mobile-link" onClick={closeMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;