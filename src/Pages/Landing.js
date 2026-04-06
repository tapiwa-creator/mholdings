import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../Components/Seo';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

const Counter = ({ target, suffix = '', label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000, steps = 60, increment = target / steps;
    let current = 0, frame = 0;
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        frame++; current += increment;
        if (frame >= steps) { setCount(target); clearInterval(counter); }
        else { setCount(Math.floor(current)); }
      }, duration / steps);
      return () => clearInterval(counter);
    }, delay);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ color: '#c9a84c', fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 500, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
    </div>
  );
};

const Landing = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Seo title="Home" description="ElevateLT specializes in professional IT services, software development, architectural design, and construction project management." path="/" />
      <ScrollToTop />
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scrollLine { 0%,100%{opacity:0.35} 50%{opacity:1} }

        .landing-section-tag {
          display:inline-block; font-size:11px; color:#c9a84c;
          letter-spacing:0.2em; text-transform:uppercase; margin-bottom:14px;
          padding:5px 14px; background:rgba(201,168,76,0.08);
          border-left:2px solid #c9a84c; font-family:'DM Sans',sans-serif;
        }
        .landing-pillar {
          display:flex; align-items:flex-start; gap:18px; padding:20px;
          background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06);
          border-radius:12px; transition:background 0.3s,border-color 0.3s;
        }
        .landing-pillar:hover { background:rgba(201,168,76,0.06); border-color:rgba(201,168,76,0.2); }

        .landing-vision-card {
          background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07);
          border-radius:16px; padding:clamp(1.25rem,3vw,2rem);
          transition:border-color 0.3s,transform 0.3s; position:relative; overflow:hidden;
        }
        .landing-vision-card:hover { border-color:rgba(201,168,76,0.25); transform:translateY(-3px); }

        .landing-team-card {
          background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07);
          border-radius:18px; padding:clamp(1.25rem,3vw,2rem);
          display:flex; flex-direction:column; align-items:center; text-align:center;
          transition:border-color 0.3s,transform 0.3s;
        }
        .landing-team-card:hover { border-color:rgba(201,168,76,0.25); transform:translateY(-5px); }

        .landing-cta-btn {
          display:inline-block; background:#0a0f1e; color:#ffffff;
          padding:13px 32px; border-radius:10px; font-family:'DM Sans',sans-serif;
          font-size:15px; font-weight:600; text-decoration:none;
          transition:background 0.2s, transform 0.2s;
        }
        .landing-cta-btn:hover { background:#111827; transform:translateY(-2px); }

        .landing-hero-btn {
          display:inline-block;
          background:linear-gradient(135deg,#c9a84c,#e8c97a);
          color:#0a0f1e; padding:13px 28px; border-radius:10px;
          font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600;
          text-decoration:none; transition:transform 0.2s;
        }
        .landing-hero-btn:hover { transform:translateY(-2px); }

        @media(min-width:768px){ .landing-stats-grid{grid-template-columns:repeat(4,1fr)!important} }
        @media(max-width:480px){ .landing-vision-grid{grid-template-columns:1fr!important} }
        @media(max-width:640px){ .landing-team-grid{grid-template-columns:1fr!important} }
        @media(min-width:641px) and (max-width:1023px){ .landing-team-grid{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:1023px){ .landing-why-grid{grid-template-columns:1fr!important} }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#0a0f1e', fontFamily: "'DM Sans', sans-serif", color: '#ffffff', overflowX: 'hidden' }}>

        {/* ── HERO ── */}
        <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center', paddingTop: '150px', paddingBottom: '100px', paddingLeft: 'clamp(1.5rem,5vw,5rem)', paddingRight: 'clamp(1.5rem,5vw,5rem)', overflow:'hidden' }}>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', textAlign: 'center', animation: 'fadeUp 0.9s ease both' }}>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.4rem,5.5vw,4.2rem)', fontWeight: 700, lineHeight: 1.15, color: '#ffffff', marginBottom: '1.25rem' }}>
              Delivering{' '}
              <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>smart</em>
              {' '}in<br />software development and architecture
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(16px,2.2vw,18px)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto 2rem' }}>
              ElevateLT specializes in professional web development and architectural design services. Delivering innovative digital and sustainable building designs that create lasting value for our clients across diverse sectors.
            </p>
            <Link to="/services" className="landing-hero-btn">Our Services</Link>
          </div>

          <div style={{ position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'8px' }}>
            <div style={{ width:'1px', height:'48px', background:'linear-gradient(#c9a84c,transparent)', animation:'scrollLine 2s ease infinite' }} />
          </div>
        </div>

        {/* ── STATS ── */}
        <div style={{ background:'rgba(255,255,255,0.02)', borderTop:'1px solid rgba(201,168,76,0.1)', borderBottom:'1px solid rgba(201,168,76,0.1)' }}>
          <div style={{ width:'100%', padding:'0 clamp(1.5rem,5vw,5rem)' }}>
            <div className="landing-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
              {[
                { target: 1, suffix: '', label: 'Years of Operation', delay: 100 },
                { target: 50, suffix: '+', label: 'Projects Delivered', delay: 300 },
                { target: 20, suffix: '+', label: 'Active Clients', delay: 500 },
                { target: 100, suffix: '%', label: 'Client Satisfaction', delay: 700 },
              ].map((stat, i) => (
                <div key={i} style={{ padding: '3rem 1rem', textAlign: 'center', borderRight: i % 2 === 0 ? '1px solid rgba(201,168,76,0.1)' : 'none', borderBottom: i < 2 ? '1px solid rgba(201,168,76,0.1)' : 'none' }}>
                  <Counter {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ width:'100%', padding:'80px clamp(1.5rem,5vw,5rem) 0', display:'flex', flexDirection:'column', gap:'80px', boxSizing: 'border-box' }}>

          {/* ── WHY CHOOSE US ── */}
          <div className="landing-why-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'center' }}>
            <div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Your Trusted Partner in Innovation & Design
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px,2vw,15px)', lineHeight: 1.85, marginBottom: '1rem' }}>
                At ElevateLT, we don't just build — we transform visions into reality. Whether you're looking to elevate your space with precision-crafted architectural plans or scale your business with cutting-edge web development, we bring the expertise, creativity, and dedication that set us apart.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px,2vw,15px)', lineHeight: 1.85, marginBottom: '1rem' }}>
                Our architectural plans are thoughtfully designed to blend functionality with aesthetic excellence, delivering spaces that inspire and endure. On the digital front, our modern web development services are engineered for performance, user experience, and lasting impact.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px,2vw,15px)', lineHeight: 1.85 }}>
                With ElevateLT, you gain more than a service provider; you gain a committed partner driven by quality, innovation, and your success.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '20px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', background: 'radial-gradient(circle,rgba(201,168,76,0.1),transparent 70%)', pointerEvents: 'none' }} />
              {[
                { icon: <svg style={{ width: '22px', height: '22px', color: '#c9a84c' }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line><line x1="2" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="22" y2="12"></line></svg>, title: 'Precision-Crafted Solutions', desc: 'Every project is approached with meticulous attention to detail and a commitment to excellence.' },
                { icon: <svg style={{ width: '22px', height: '22px', color: '#c9a84c' }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>, title: 'Performance-Driven Development', desc: 'Our web services are engineered for speed, reliability, and exceptional user experience.' },
                { icon: <svg style={{ width: '22px', height: '22px', color: '#c9a84c' }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>, title: 'Committed Partnership', desc: 'We work alongside you, not just for you — your success is our driving mission.' },
              ].map((p, i) => (
                <div key={i} className="landing-pillar">
                  <div style={{ width: '42px', height: '42px', background: 'rgba(201,168,76,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontFamily: "'DM Serif Display', serif", color: '#ffffff', fontSize: 'clamp(14px,2vw,16px)', fontWeight: 600, marginBottom: '5px' }}>{p.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(12px,1.8vw,13px)', lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── OUR VISION ── */}
          <div>
            <div style={{ textAlign:'center', marginBottom:'3rem' }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>Our Vision</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto' }}>
                To deliver innovative technology and architectural solutions, solving problems with client satisfaction front and centre
              </p>
            </div>
            <div className="landing-vision-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }}>
              {[
                { num: '01', title: 'Smart Blueprint', desc: 'Lead digital transformation in construction, delivering future-ready, intelligent solutions for all.', bg: 'rgba(37,99,235,0.12)', iconColor: '#60a5fa', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
                { num: '02', title: 'Digital Empowerment', desc: 'Drive technology innovation that empowers people, streamlining processes through digitalisation.', bg: 'rgba(13,148,136,0.12)', iconColor: '#34d399', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
                { num: '03', title: 'Visionary Spaces', desc: 'Design innovative, sustainable environments that uplift communities and bring people together.', bg: 'rgba(201,168,76,0.1)', iconColor: '#c9a84c', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
                { num: '04', title: 'Next-Gen Software', desc: 'Deliver cutting-edge software upgrades that digitise workflows and connect users worldwide.', bg: 'rgba(124,58,237,0.12)', iconColor: '#a78bfa', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              ].map((card, i) => (
                <div key={i} className="landing-vision-card">
                  <div style={{ width: '48px', height: '48px', background: card.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <svg style={{ width: '24px', height: '24px' }} fill="none" stroke={card.iconColor} viewBox="0 0 24 24">{card.icon}</svg>
                  </div>
                  <h3 style={{ fontSize: 'clamp(14px,2vw,16px)', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(12px,1.8vw,14px)', lineHeight: 1.75 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── OUR TEAM ── */}
          <div style={{ paddingBottom:'0' }}>
            <div style={{ textAlign:'center', marginBottom:'3rem' }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>Our Team</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(13px,2vw,15px)', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto' }}>
                Meet our dedicated team of innovative professionals driving excellence across every sector.
              </p>
            </div>
            <div className="landing-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {[
                { img: '/1.jpg', name: 'Lennox B Chapata', role: 'Lead Planner', roleColor: '#60a5fa', roleBg: 'rgba(37,99,235,0.15)', desc: 'Oversees the design, planning, and execution of building projects from concept to completion. Guides architectural teams, ensures creative and functional design, and collaborates with clients and contractors to deliver aesthetically compelling, safe and sustainable structures.' },
                { img: '/2.jpg', name: 'Comfort T Mkunyadze', role: 'Tech Resource Associate', roleColor: '#34d399', roleBg: 'rgba(13,148,136,0.15)', desc: 'Supports the technical teams by identifying and managing the right tools, technologies and resources to drive project success. Collaborates closely with developers and stakeholders to streamline workflows, solve technical challenges, and ensure efficient delivery of high-quality solutions.' },
                { img: '/3.jpg', name: 'Mbonge R', role: 'Technical Lead', roleColor: '#c9a84c', roleBg: 'rgba(201,168,76,0.12)', desc: 'A technical leader with a strong ability to combine hands-on technical expertise and team guidance to deliver effective solutions. Specializing in overseeing development processes, making key architectural decisions, and supporting team members to achieve project goals efficiently.' },
              ].map((member, i) => (
                <div key={i} className="landing-team-card">
                  <div style={{ width: 'clamp(72px,12vw,100px)', height: 'clamp(72px,12vw,100px)', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.25rem', border: '2px solid rgba(201,168,76,0.3)', outline: '3px solid rgba(201,168,76,0.08)', outlineOffset: '3px' }}>
                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(14px,2vw,16px)', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>{member.name}</h3>
                  <span style={{ display: 'inline-block', background: member.roleBg, color: member.roleColor, borderRadius: '100px', padding: '4px 14px', fontSize: '12px', fontWeight: 600, marginBottom: '0.85rem', border: `1px solid ${member.roleColor}33` }}>
                    {member.role}
                  </span>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(12px,1.8vw,13px)', lineHeight: 1.75 }}>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── CTA BAND ── */}
        <div style={{ background:'linear-gradient(135deg,#c9a84c,#e8c97a)', padding:'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,5rem)', textAlign:'center', position:'relative', overflow:'hidden', marginTop:'80px' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(10,15,30,0.06) 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: '#0a0f1e', marginBottom: '0.75rem' }}>
              Ready to elevate your next project?
            </h2>
            <p style={{ fontSize: 'clamp(14px,2vw,16px)', color: 'rgba(10,15,30,0.6)', marginBottom: '2rem' }}>
              Let's build something exceptional together. Get in touch with our team today.
            </p>
            <Link to="/contact" className="landing-cta-btn">Get in Touch</Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Landing;