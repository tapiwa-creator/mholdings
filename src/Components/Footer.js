import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backdropFilter: 'blur(4px)' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid rgba(201,168,76,0.2)', maxWidth: '520px', width: '100%', overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 1.75rem', borderBottom: '1px solid rgba(10,15,30,0.07)' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#0a0f1e', margin: 0 }}>{title}</h2>
          <button
            onClick={onClose}
            style={{ background: 'rgba(10,15,30,0.06)', border: 'none', borderRadius: '8px', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(10,15,30,0.45)', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,15,30,0.06)'}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const sectionTitle = (text) => (
    <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#c9a84c', margin: '0 0 4px' }}>{text}</p>
  );
  const bodyText = (text) => (
    <p style={{ fontSize: '14px', color: 'rgba(10,15,30,0.55)', lineHeight: 1.75, margin: 0 }}>{text}</p>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .footer-link {
          color: rgba(10,15,30,0.5);
          font-size: 14px;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
          display: block;
          padding: 3px 0;
        }
        .footer-link:hover { color: #c9a84c; }

        .footer-legal-btn {
          background: none; border: none; cursor: pointer;
          color: rgba(10,15,30,0.5);
          font-size: 14px; font-family: 'DM Sans', sans-serif;
          padding: 3px 0; text-align: left;
          transition: color 0.2s; display: block;
        }
        .footer-legal-btn:hover { color: #c9a84c; }

        .footer-col-title {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(10,15,30,0.35);
          margin: 0 0 1rem; font-family: 'DM Sans', sans-serif;
        }

        @media (max-width: 640px) {
          .footer-brand { grid-column: span 1 !important; }
        }
      `}</style>

      <footer style={{ background: '#e2ddd4', borderTop: '1px solid rgba(201,168,76,0.22)', fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem 1.5rem' }}>

          {/* Main grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '2rem 3rem', marginBottom: '2rem' }}>

            {/* Brand */}
            <div style={{ gridColumn: 'span 2' }} className="footer-brand">
              <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', textDecoration: 'none', marginBottom: '1rem' }}>
                <img src="/logo.jpg" alt="ElevateLT" style={{ height: '62px', width: 'auto', display: 'block' }} />
                <div style={{ marginLeft: '-10px' }}>
                  <div style={{ fontSize: '17px', fontWeight: 600, color: '#0a0f1e', lineHeight: 1.2 }}>ElevateLT</div>
                  <div style={{ fontSize: '12px', color: '#c9a84c', fontWeight: 400, letterSpacing: '0.05em' }}>Excellence in Business</div>
                </div>
              </Link>
              <p style={{ color: 'rgba(10,15,30,0.5)', fontSize: '14px', lineHeight: 1.8, maxWidth: '280px', margin: 0 }}>
                Building sustainable value through strategic solutions across software, architecture and IT.
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="footer-col-title">Services</p>
              <Link to="/services" className="footer-link">Architecture</Link>
              <Link to="/services" className="footer-link">Web Development</Link>
              <Link to="/services" className="footer-link">Construction Project Development</Link>
              <Link to="/services" className="footer-link">IT Consultancy</Link>
            </div>

            {/* Company */}
            <div>
              <p className="footer-col-title">Company</p>
              <Link to="/projects" className="footer-link">Featured Projects</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>

            {/* Legal */}
            <div>
              <p className="footer-col-title">Legal</p>
              <button className="footer-legal-btn" onClick={() => setPrivacyOpen(true)}>Privacy Policy</button>
              <button className="footer-legal-btn" onClick={() => setTermsOpen(true)}>Terms of Service</button>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(10,15,30,0.1)', paddingTop: '1.25rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(10,15,30,0.35)', fontSize: '13px', margin: 0 }}>
              © 2026 ElevateLT. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        {sectionTitle('Information We Collect')}
        {bodyText('We collect name, email, and message content submitted through our contact form solely to respond to your enquiry. We do not collect data passively or track your behaviour.')}
        {sectionTitle('How We Use It')}
        {bodyText('Your information is used only to respond to your request. We do not sell, rent, or share your data with third parties for marketing purposes.')}
        {sectionTitle('Data Retention')}
        {bodyText('Contact submissions are retained for up to 12 months, after which they are securely deleted. You may request deletion at any time by contacting us.')}
        {sectionTitle('Contact')}
        {bodyText('For any privacy concerns, reach us at informkholdings@gmail.com.')}
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        {sectionTitle('Services')}
        {bodyText('ElevateLT provides web development, architectural planning, construction project management, and IT consultancy services. All work is delivered under agreed project terms outlined in individual client proposals.')}
        {sectionTitle('Intellectual Property')}
        {bodyText('All deliverables become the property of the client upon full payment. ElevateLT retains the right to display completed work in its portfolio unless otherwise agreed in writing.')}
        {sectionTitle('Limitation of Liability')}
        {bodyText('ElevateLT shall not be liable for indirect or consequential losses arising from the use of our services beyond the value of the original agreement.')}
        {sectionTitle('Contact')}
        {bodyText('Questions about these terms? Email us at informkholdings@gmail.com.')}
      </Modal>
    </>
  );
};

export default Footer;