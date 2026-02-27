import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const serviceID  = 'service_s1dqnqe';
      const templateID = 'template_zwqjv3s';
      const publicKey  = 'uzzWBFCynj8Q1XEJ-';

      const templateParams = {
        from_name:  `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_email:   'tapiwacomfort086@gmail.com',
        message:    formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    background: '#F8FAFF',
    border: '1px solid #DBEAFE',
    borderRadius: '10px',
    fontSize: '14px',
    color: '#1A1A2E',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: '#374151',
    marginBottom: '6px',
  };

  const contactItems = [
    {
      label: 'Email',
      value: 'informkholdings@gmail.com',
      href: 'mailto:informkholdings@gmail.com',
      bg: '#DBEAFE',
      iconColor: '#2563EB',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
      label: 'Phone',
      value: '+236 781406806',
      href: 'tel:+236781406806',
      bg: '#CCFBF1',
      iconColor: '#0D9488',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    },
    {
      label: 'Address',
      value: 'Harare, Zimbabwe',
      href: null,
      bg: '#FEF3C7',
      iconColor: '#D97706',
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .contact-input:focus {
          border-color: #2563EB !important;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1) !important;
        }

        .contact-input::placeholder {
          color: #9CA3AF;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-divider-h {
          width: 100%;
          height: 1px;
          background: #E5E7EB;
        }

        .contact-divider-v {
          display: none;
          width: 1px;
          background: #E5E7EB;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .contact-divider-h { display: none; }
          .contact-divider-v { display: block; }
        }

        .submit-btn:hover:not(:disabled) {
          background: #1d4ed8 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37,99,235,0.4) !important;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#F0F5FF', fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E', overflowX: 'hidden' }}>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

          {/* Page Header — free, no card */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '1.5rem 0' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.75rem', lineHeight: 1.15 }}>
              Get in Touch
            </h1>
            <p style={{ color: '#6B7280', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto' }}>
              Ready to bring your ideas to life? Contact us to discuss how our software, architectural and design solutions can support your project.
            </p>
          </div>

          {/* Main Card */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.07)', overflow: 'hidden' }}>

            {/* Two-column layout */}
            <div style={{ display: 'flex', flexDirection: 'column' }} className="contact-layout">

              <div style={{ display: 'grid' }} className="contact-grid">

                {/* LEFT — Contact Info */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
                  <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.5rem' }}>
                    Contact Information
                  </h2>
                  <p style={{ color: '#6B7280', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.75, marginBottom: '2rem' }}>
                    Reach out to our team for inquiries about investment opportunities, partnerships, or general information.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {contactItems.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{ width: '46px', height: '46px', background: item.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg style={{ width: '22px', height: '22px' }} fill="none" stroke={item.iconColor} viewBox="0 0 24 24">
                            {item.icon}
                          </svg>
                        </div>
                        <div>
                          <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', marginBottom: '3px' }}>
                            {item.label}
                          </p>
                          {item.href ? (
                            <a href={item.href} style={{ color: '#1A1A2E', fontSize: 'clamp(13px, 1.8vw, 15px)', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                              onMouseEnter={e => e.target.style.color = '#2563EB'}
                              onMouseLeave={e => e.target.style.color = '#1A1A2E'}>
                              {item.value}
                            </a>
                          ) : (
                            <p style={{ color: '#1A1A2E', fontSize: 'clamp(13px, 1.8vw, 15px)', fontWeight: 500, margin: 0 }}>{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dividers */}
                <div className="contact-divider-h" style={{ width: '100%', height: '1px', background: '#E5E7EB' }} />
                <div className="contact-divider-v" style={{ display: 'none', width: '1px', background: '#E5E7EB' }} />

                {/* RIGHT — Form */}
                <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', borderLeft: '1px solid #E5E7EB' }} className="form-panel">
                  <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#1A1A2E', marginBottom: '1.5rem' }}>
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

                    {/* Name row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="name-grid">
                      <div>
                        <label htmlFor="firstName" style={labelStyle}>First Name</label>
                        <input
                          type="text" id="firstName" name="firstName"
                          value={formData.firstName} onChange={handleChange}
                          placeholder="First" required
                          className="contact-input"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                        <input
                          type="text" id="lastName" name="lastName"
                          value={formData.lastName} onChange={handleChange}
                          placeholder="Last" required
                          className="contact-input"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email</label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        placeholder="email@example.com" required
                        className="contact-input"
                        style={inputStyle}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" style={labelStyle}>Message</label>
                      <textarea
                        id="message" name="message"
                        value={formData.message} onChange={handleChange}
                        placeholder="How can we help you?"
                        rows="5" required
                        className="contact-input"
                        style={{ ...inputStyle, resize: 'none' }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn"
                      style={{ width: '100%', background: '#2563EB', color: 'white', padding: '13px 24px', borderRadius: '10px', border: 'none', fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.35)', transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Status */}
                    {submitStatus.message && (
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 500,
                        background: submitStatus.type === 'success' ? '#F0FDF4' : '#FFF1F2',
                        color: submitStatus.type === 'success' ? '#16A34A' : '#DC2626',
                        border: `1px solid ${submitStatus.type === 'success' ? '#BBF7D0' : '#FECDD3'}`,
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

        <style>{`
          @media (max-width: 1023px) {
            .form-panel {
              border-left: none !important;
              border-top: 1px solid #E5E7EB;
            }
            .name-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 640px) {
            .name-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Contact;