import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../Components/Seo';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

const Services = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const services = [
    {
      title: 'Architectural Plan Drawing',
      subtitle: 'Residential & Commercial Stands',
      description: 'From bespoke residential homes to large-scale commercial developments, ElevateLT delivers precision-crafted architectural plans tailored to your vision. Our experienced team produces detailed drawings that meet regulatory standards while maximising space, functionality, and aesthetic appeal — turning every stand into a place worth building.',
      image: '/archi.jpg', alt: 'Architectural Plan Drawing',
      accent: '#3b82f6', accentBg: 'rgba(37,99,235,0.08)',
    },
    {
      title: 'Web Development',
      subtitle: 'Modern Digital Experiences',
      description: 'We design and build high-performance websites and web applications that captivate users and drive results. From sleek corporate platforms to dynamic e-commerce solutions, our development team combines clean code with compelling design — ensuring your digital presence is fast, responsive, and built to scale with your ambitions.',
      image: '/24.jpg', alt: 'Web Development',
      accent: '#0d9488', accentBg: 'rgba(13,148,136,0.08)',
    },
    {
      title: 'Construction Project Development',
      subtitle: 'End-to-End Project Management',
      description: 'Bring your construction visions to life with our comprehensive project development services. From initial feasibility studies and site analysis to contractor coordination and quality assurance, ElevateLT oversees every phase of your construction project. We ensure timely delivery, budget adherence, and the highest standards of craftsmanship.',
      image: '/const.jpg', alt: 'Construction Project Development',
      accent: '#c9a84c', accentBg: 'rgba(201,168,76,0.08)',
    },
    {
      title: 'Software Management & IT Consultancy',
      subtitle: 'Strategic Technology Guidance',
      description: 'Navigate the complexities of modern technology with confidence. ElevateLT provides expert software management and IT consultancy services — from system architecture and infrastructure planning to software implementation and ongoing support. We align technology strategy with business goals to keep your operations efficient, secure, and future-ready.',
      image: '/it.jpg', alt: 'IT Consultancy',
      accent: '#7c3aed', accentBg: 'rgba(124,58,237,0.08)',
    },
  ];

  return (
    <>
      <Seo title="Our Services" description="Explore ElevateLT's core services, spanning web development, architectural plans, IT consultancy, and construction project management." path="/services" />
      <ScrollToTop />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        .svc-card {
          display: flex; flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(10,15,30,0.08);
          border-radius: 20px; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .svc-card:hover {
          border-color: rgba(201,168,76,0.35);
          transform: translateY(-4px);
        }

        @media (min-width: 1024px) {
          .svc-card { flex-direction: row; }
          .svc-card.reverse { flex-direction: row-reverse; }
        }

        .svc-img-wrap {
          width: 100%; flex-shrink: 0; overflow: hidden;
          min-height: 220px; max-height: 280px;
        }
        @media (min-width: 1024px) {
          .svc-img-wrap { width: 38%; max-height: none; min-height: 320px; }
        }

        .svc-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .svc-card:hover .svc-img-wrap img { transform: scale(1.04); }

        .svc-divider-h { width:100%; height:1px; background:rgba(10,15,30,0.06); }
        .svc-divider-v { display:none; width:1px; background:rgba(10,15,30,0.06); flex-shrink:0; }

        @media (min-width: 1024px) {
          .svc-divider-h { display: none; }
          .svc-divider-v { display: block; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#f4f1eb', fontFamily: "'DM Sans', sans-serif", color: '#0a0f1e', overflowX: 'hidden' }}>

        {/* Page header */}
        <div style={{ textAlign: 'center', padding: 'clamp(3rem,8vw,6rem) clamp(1.5rem,5vw,5rem) 0', width: '100%', boxSizing: 'border-box', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: '#0a0f1e', marginBottom: '0.75rem', lineHeight: 1.15 }}>
            Our Core Services
          </h2>
          <p style={{ color: 'rgba(10,15,30,0.5)', fontSize: 'clamp(14px,2vw,16px)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto' }}>
            A multidisciplinary company combining architectural design, web development, construction project management and IT consultancy to deliver smart, functional, and beautifully crafted solutions.
          </p>
        </div>

        {/* Service cards */}
        <section style={{ width: '100%', boxSizing: 'border-box', margin: '0 auto', padding: 'clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,5rem) clamp(3rem,6vw,5rem)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {services.map((service, index) => (
              <div key={index} className={`svc-card${index % 2 === 1 ? ' reverse' : ''}`}>

                <div className="svc-img-wrap">
                  <img src={service.image} alt={service.alt} />
                </div>

                <div className="svc-divider-h" />
                <div className="svc-divider-v" />

                <div style={{ flex: 1, padding: 'clamp(1.5rem,4vw,2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.85rem' }}>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', fontWeight: 700, color: '#0a0f1e', lineHeight: 1.2 }}>
                    {service.title}
                  </h3>
                  <div style={{ width: '40px', height: '2px', background: `linear-gradient(90deg,${service.accent},transparent)`, borderRadius: '4px' }} />
                  <p style={{ color: 'rgba(10,15,30,0.55)', fontSize: 'clamp(13px,1.8vw,15px)', lineHeight: 1.85 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;