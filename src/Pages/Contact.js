import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Seo from '../Components/Seo';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

const Contact = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    try {
      await emailjs.send(
        'service_s1dqnqe', 'template_zwqjv3s',
        { from_name: `${formData.firstName} ${formData.lastName}`, from_email: formData.email, to_email: 'tapiwacomfort086@gmail.com', message: formData.message },
        'uzzWBFCynj8Q1XEJ-'
      );
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    background: '#ffffff',
    border: '1px solid rgba(10,15,30,0.12)',
    borderRadius: '10px', fontSize: '14px', color: '#0a0f1e',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block', fontSize: '13px', fontWeight: 600,
    color: 'rgba(10,15,30,0.55)', marginBottom: '6px',
  };

  const contactItems = [
    {
      label: 'Email', value: 'informkholdings@gmail.com', href: 'mailto:informkholdings@gmail.com',
      bg: 'rgba(37,99,235,0.08)', iconColor: '#3b82f6',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
      label: 'Phone', value: '+236 781406806, +263 771688458', href: 'tel:+236781406806',
      bg: 'rgba(13,148,136,0.08)', iconColor: '#0d9488',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    },
    {
      label: 'Address', value: 'Harare, Zimbabwe', href: null,
      bg: 'rgba(201,168,76,0.08)', iconColor: '#c9a84c',
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
    },
  ];

  return (
    <>
      <Seo title="Contact Us" description="Get in touch with ElevateLT for inquiries regarding IT, software, architecture, and construction partnerships." path="/contact" />
      <ScrollToTop />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .contact-input:focus {
          border-color: rgba(201,168,76,0.5) !important;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.08) !important;
        }
        .contact-input::placeholder { color: rgba(10,15,30,0.25); }

        .submit-btn {
          width:100%; background:linear-gradient(135deg,#c9a84c,#e8c97a);
          color:#0a0f1e; padding:13px 24px; border-radius:10px; border:none;
          font-family:'DM Sans',sans-serif; font-size:15px; font-weight:700;
          cursor:pointer; transition:transform 0.2s, opacity 0.2s;
          letter-spacing: 0.02em;
        }
        .submit-btn:hover:not(:disabled) { transform:translateY(-2px); opacity:0.92; }
        .submit-btn:disabled { opacity:0.5; cursor:not-allowed; }

        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:0; }

        @media (max-width:768px) {
          .contact-grid { grid-template-columns:1fr; }
          .form-panel { border-left:none !important; border-top:1px solid rgba(10,15,30,0.07); }
          .name-grid { grid-template-columns:1fr !important; }
        }
        @media (min-width:769px) {
          .form-panel { border-left:1px solid rgba(10,15,30,0.07) !important; border-top:none; }
        }
        @media (min-width:640px) {
          .name-grid { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#f4f1eb', fontFamily: "'DM Sans', sans-serif", color: '#0a0f1e', overflowX: 'hidden' }}>

        <div style={{ width: '100%', margin: '0 auto', padding: 'clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,5rem) clamp(3rem,6vw,5rem)', boxSizing: 'border-box' }}>

          {/* Page header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: '#0a0f1e', marginBottom: '0.75rem', lineHeight: 1.15 }}>
              Get in Touch
            </h1>
            <p style={{ color: 'rgba(10,15,30,0.5)', fontSize: 'clamp(14px,2vw,16px)', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto' }}>
              Ready to bring your ideas to life? Contact us to discuss how our software, architectural and design solutions can support your project.
            </p>
          </div>

          {/* Main card */}
          <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid rgba(10,15,30,0.08)', overflow: 'hidden' }}>
            <div className="contact-grid">

              {/* LEFT — Contact info */}
              <div style={{ padding: 'clamp(1.5rem,4vw,3rem)' }}>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 700, color: '#0a0f1e', marginBottom: '0.5rem' }}>
                  Contact Information
                </h2>
                <p style={{ color: 'rgba(10,15,30,0.5)', fontSize: 'clamp(13px,1.8vw,15px)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Connect with our team for inquiries related to IT, architectural design services, partnerships, or investment opportunities.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {contactItems.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ width: '46px', height: '46px', background: item.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${item.iconColor}33` }}>
                        <svg style={{ width: '22px', height: '22px' }} fill="none" stroke={item.iconColor} viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      <div>
                        <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(10,15,30,0.35)', marginBottom: '3px' }}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href}
                            style={{ color: 'rgba(10,15,30,0.75)', fontSize: 'clamp(13px,1.8vw,15px)', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color = '#c9a84c'}
                            onMouseLeave={e => e.target.style.color = 'rgba(10,15,30,0.75)'}
                          >{item.value}</a>
                        ) : (
                          <p style={{ color: 'rgba(10,15,30,0.75)', fontSize: 'clamp(13px,1.8vw,15px)', fontWeight: 500, margin: 0 }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Form */}
              <div style={{ padding: 'clamp(1.5rem,4vw,3rem)' }} className="form-panel">
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 700, color: '#0a0f1e', marginBottom: '1.5rem' }}>
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="name-grid">
                    <div>
                      <label htmlFor="firstName" style={labelStyle}>First Name</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="contact-input" style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="contact-input" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="contact-input" style={inputStyle} />
                  </div>

                  <div>
                    <label htmlFor="message" style={labelStyle}>Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required className="contact-input" style={{ ...inputStyle, resize: 'none' }} />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>

                  {submitStatus.message && (
                    <div style={{
                      padding: '12px 16px', borderRadius: '10px', fontSize: '14px', fontWeight: 500,
                      background: submitStatus.type === 'success' ? 'rgba(13,148,136,0.08)' : 'rgba(239,68,68,0.08)',
                      color: submitStatus.type === 'success' ? '#0d9488' : '#dc2626',
                      border: `1px solid ${submitStatus.type === 'success' ? 'rgba(13,148,136,0.2)' : 'rgba(239,68,68,0.2)'}`,
                    }}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;