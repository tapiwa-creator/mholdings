import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ── Animated counter ──────────────────────────────────────────────────────────
const Counter = ({ target, suffix = '', label, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let frame = 0;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        frame++;
        current += increment;
        if (frame >= steps) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2" style={{ color: '#2563EB', fontFamily: "'DM Serif Display', serif" }}>
        {count}{suffix}
      </div>
      <div className="font-medium text-xs sm:text-sm" style={{ color: '#6B7280' }}>{label}</div>
    </div>
  );
};

// ── Landing Page ──────────────────────────────────────────────────────────────
const Landing = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <div style={{ minHeight: '100vh', background: '#F0F5FF', fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E', overflowX: 'hidden', position: 'relative' }}>

        {/* Ambient blobs */}
        <div style={{ position: 'fixed', top: '-100px', right: '-100px', width: '500px', height: '500px', background: '#2563EB', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.08, pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'fixed', bottom: '0', left: '-100px', width: '400px', height: '400px', background: '#0D9488', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.08, pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.07)', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)', textAlign: 'center' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>

              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#DBEAFE', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
                <span style={{ width: '8px', height: '8px', background: '#2563EB', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#2563EB', fontSize: '13px', fontWeight: 600 }}>One-stop software and architecture hub</span>
              </div>

              <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)', fontWeight: 700, lineHeight: 1.15, color: '#1A1A2E', marginBottom: '1.25rem' }}>
                Delivering <em style={{ color: '#2563EB', fontStyle: 'italic' }}>smart solutions</em> in<br />software development and architecture
              </h1>

              <p style={{ color: '#6B7280', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
                LTSolutions specializes in professional web development and architectural design services. Delivering innovative digital solutions and sustainable building designs that create lasting value for our clients across diverse sectors.
              </p>

              <Link
                to="/services"
                style={{ display: 'inline-block', background: '#2563EB', color: 'white', padding: '13px 28px', borderRadius: '10px', fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 14px rgba(37,99,235,0.35)', transition: 'background 0.2s, transform 0.2s' }}
                onMouseEnter={e => { e.target.style.background = '#1d4ed8'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.background = '#2563EB'; e.target.style.transform = 'translateY(0)'; }}
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* ── 2. STATS ─────────────────────────────────────────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="stats-grid">
            {[
              { target: 1,   suffix: '',  label: 'Years of Operation', delay: 100 },
              { target: 50,  suffix: '+', label: 'Projects Delivered',  delay: 300 },
              { target: 20,  suffix: '+', label: 'Active Clients',      delay: 500 },
              { target: 100, suffix: '%', label: 'Client Satisfaction', delay: 700 },
            ].map((stat, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.05)', padding: '1.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Counter {...stat} />
              </div>
            ))}
          </div>

          {/* ── 3. WHY CHOOSE US ────────────────────────────────────────────── */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
            <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem) 1.5rem', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.5rem' }}>Why Choose Us</h2>
              <p style={{ color: '#6B7280', fontSize: 'clamp(13px, 2vw, 15px)' }}>Your Trusted Partner in Innovation & Design</p>
            </div>
            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              <p style={{ color: '#4B5563', fontSize: 'clamp(14px, 2vw, 15px)', lineHeight: 1.85 }}>
                At LTSolutions, we don't just build — we transform visions into reality. Whether you're looking to elevate your space with precision-crafted architectural plans or scale your business with cutting-edge web development, we bring the expertise, creativity, and dedication that set us apart. Our architectural solutions are thoughtfully designed to blend functionality with aesthetic excellence, delivering spaces that inspire and endure. On the digital front, our modern web development services are engineered for performance, user experience, and lasting impact — tailored to help your brand thrive in an ever-evolving landscape. With LTSolutions, you gain more than a service provider; you gain a committed partner driven by quality, innovation, and your success.
              </p>
            </div>
          </div>

          {/* ── 4. OUR VISION ───────────────────────────────────────────────── */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
            <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem) 1.5rem', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.75rem' }}>Our Vision</h2>
              <p style={{ color: '#4B5563', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto' }}>
                To deliver innovative technology and architectural solutions, solving problems with client satisfaction front and centre
              </p>
            </div>

            <div className="vision-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {[
                {
                  title: 'Smart Blueprint',
                  desc: 'Lead digital transformation in construction, delivering future-ready, intelligent solutions for all.',
                  bg: '#DBEAFE', iconColor: '#2563EB',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                },
                {
                  title: 'Digital Empowerment',
                  desc: 'Drive technology innovation that empowers people, streamlining processes through digitalisation.',
                  bg: '#CCFBF1', iconColor: '#0D9488',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                },
                {
                  title: 'Visionary Spaces',
                  desc: 'Design innovative, sustainable environments that uplift communities and bring people together.',
                  bg: '#FEF3C7', iconColor: '#D97706',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                },
                {
                  title: 'Next-Gen Software',
                  desc: 'Deliver cutting-edge software upgrades that digitise workflows and connect users worldwide.',
                  bg: '#EDE9FE', iconColor: '#7C3AED',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="vision-card"
                  style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', borderRight: i % 2 === 0 ? '1px solid #E5E7EB' : 'none', borderBottom: i < 2 ? '1px solid #E5E7EB' : 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ width: '48px', height: '48px', background: card.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <svg style={{ width: '24px', height: '24px', color: card.iconColor }} fill="none" stroke={card.iconColor} viewBox="0 0 24 24">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ color: '#6B7280', fontSize: 'clamp(12px, 1.8vw, 14px)', lineHeight: 1.75 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 5. OUR TEAM ─────────────────────────────────────────────────── */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
            <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem) 1.5rem', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.75rem' }}>Our Team</h2>
              <p style={{ color: '#4B5563', fontSize: 'clamp(13px, 2vw, 15px)', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto' }}>
                Meet our dedicated team of innovative professionals driving excellence across every sector.
              </p>
            </div>

            <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
              {[
                {
                  img: '/2.jpg',
                  name: 'Comfort T Mkunyadze',
                  role: 'Co-Founder',
                  roleColor: '#2563EB',
                  roleBg: '#DBEAFE',
                  desc: 'Driven by vision and innovation, turning ambitious ideas into impactful solutions across IT, architecture and more.'
                },
                {
                  img: '/1.jpg',
                  name: 'Leenox B Chapata',
                  role: 'Operations Manager',
                  roleColor: '#0D9488',
                  roleBg: '#CCFBF1',
                  desc: 'A detail driven leader with deep expertise in architecture. Blending on-site know-how, design insight and team coordination to turn blueprints into real buildings.'
                },
                {
                  img: '/3.jpg',
                  name: 'Takudzwa Phuwaphuwa',
                  role: 'Sustainability Leader',
                  roleColor: '#D97706',
                  roleBg: '#FEF3C7',
                  desc: 'A forward thinking strategist who drives eco-friendly practices across the organization, making sure sustainability aligns with company growth and delivers measurable ROI.'
                },
              ].map((member, i) => (
                <div
                  key={i}
                  style={{ background: '#EFF6FF', borderRadius: '16px', border: '1px solid #DBEAFE', padding: 'clamp(1.25rem, 3vw, 2rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'box-shadow 0.25s, transform 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ width: 'clamp(72px,12vw,100px)', height: 'clamp(72px,12vw,100px)', borderRadius: '50%', overflow: 'hidden', marginBottom: '1rem', border: `3px solid ${member.roleBg}`, boxShadow: `0 0 0 3px ${member.roleColor}22` }}>
                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.4rem' }}>{member.name}</h3>
                  <span style={{ display: 'inline-block', background: member.roleBg, color: member.roleColor, borderRadius: '100px', padding: '3px 12px', fontSize: '12px', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {member.role}
                  </span>
                  <p style={{ color: '#6B7280', fontSize: 'clamp(12px, 1.8vw, 13px)', lineHeight: 1.75 }}>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }

          /* Stats: 2-col on mobile → 4-col on md+ */
          @media (min-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }

          /* Vision: 2-col on all, 1-col on small mobile */
          @media (max-width: 480px) {
            .vision-grid {
              grid-template-columns: 1fr !important;
            }
            .vision-card {
              border-right: none !important;
              border-bottom: 1px solid #E5E7EB !important;
            }
            .vision-card:last-child {
              border-bottom: none !important;
            }
          }

          /* Team: 1-col mobile → 2-col sm → 3-col lg */
          @media (max-width: 640px) {
            .team-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 641px) and (max-width: 1023px) {
            .team-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Landing;