import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ── Scroll to top on mount ────────────────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const services = [
    {
      title: "Architectural Plan Drawing",
      subtitle: "Residential & Commercial Stands",
      description:
        "From bespoke residential homes to large-scale commercial developments, LT Solutions delivers precision-crafted architectural plans tailored to your vision. Our experienced team produces detailed drawings that meet regulatory standards while maximising space, functionality, and aesthetic appeal — turning every stand into a place worth building.",
      image: "/archi.jpg",
      alt: "Architectural Plan Drawing",
      accent: "#2563EB",
      accentBg: "#DBEAFE",
    },
    {
      title: "Web Development",
      subtitle: "Modern Digital Experiences",
      description:
        "We design and build high-performance websites and web applications that captivate users and drive results. From sleek corporate platforms to dynamic e-commerce solutions, our development team combines clean code with compelling design — ensuring your digital presence is fast, responsive, and built to scale with your ambitions.",
      image: "/web.jpg",
      alt: "Web Development",
      accent: "#0D9488",
      accentBg: "#CCFBF1",
    },
    {
      title: "Construction Project Development",
      subtitle: "End-to-End Project Management",
      description:
        "Bring your construction visions to life with our comprehensive project development services. From initial feasibility studies and site analysis to contractor coordination and quality assurance, LT Solutions oversees every phase of your construction project. We ensure timely delivery, budget adherence, and the highest standards of craftsmanship.",
      image: "/const.jpg",
      alt: "Construction Project Development",
      accent: "#B45309",
      accentBg: "#FEEBC8",
    },
    {
      title: "Software Management & IT Consultancy",
      subtitle: "Strategic Technology Guidance",
      description:
        "Navigate the complexities of modern technology with confidence. LT Solutions provides expert software management and IT consultancy services — from system architecture and infrastructure planning to software implementation and ongoing support. We align technology strategy with business goals to keep your operations efficient, secure, and future-ready.",
      image: "/it.jpg",
      alt: "IT Consultancy",
      accent: "#D97706",
      accentBg: "#FEF3C7",
    }
  ];

  return (
    <>
      <ScrollToTop />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .service-card {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 20px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 8px 32px rgba(0,0,0,0.07);
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s;
        }

        .service-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
          transform: translateY(-4px);
        }

        @media (min-width: 1024px) {
          .service-card {
            flex-direction: row;
          }
          .service-card.reverse {
            flex-direction: row-reverse;
          }
        }

        .service-img-wrap {
          width: 100%;
          flex-shrink: 0;
          overflow: hidden;
          min-height: 220px;
          max-height: 280px;
        }

        @media (min-width: 1024px) {
          .service-img-wrap {
            width: 38%;
            max-height: none;
            min-height: 320px;
          }
        }

        .service-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .service-card:hover .service-img-wrap img {
          transform: scale(1.04);
        }

        .divider-h {
          width: 100%;
          height: 1px;
          background: #E5E7EB;
        }

        .divider-v {
          display: none;
          width: 1px;
          background: #E5E7EB;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .divider-h { display: none; }
          .divider-v { display: block; }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#F0F5FF', fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E', overflowX: 'hidden', position: 'relative' }}>

        <section style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '1.5rem 0' }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#1A1A2E', marginBottom: '0.75rem', lineHeight: 1.15 }}>
              Our Core Services
            </h2>
            <p style={{ color: '#6B7280', fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto' }}>
              A multidisciplinary company combining architectural design, web development, construction project management and IT consultancy to deliver smart, functional, and beautifully crafted solutions.
            </p>
          </div>

          {/* Service Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {services.map((service, index) => (
              <div key={index} className="service-card reverse">

                {/* Image */}
                <div className="service-img-wrap">
                  <img src={service.image} alt={service.alt} />
                </div>

                {/* Dividers */}
                <div className="divider-h" />
                <div className="divider-v" />

                {/* Text Content */}
                <div style={{ flex: 1, padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.85rem' }}>

                  {/* Subtitle badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: service.accentBg, borderRadius: '100px', padding: '5px 14px', width: 'fit-content' }}>
                    <span style={{ width: '7px', height: '7px', background: service.accent, borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                    <span style={{ color: service.accent, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{service.subtitle}</span>
                  </div>

                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#1A1A2E', lineHeight: 1.2 }}>
                    {service.title}
                  </h3>

                  {/* Accent rule */}
                  <div style={{ width: '40px', height: '3px', background: service.accent, borderRadius: '4px' }} />

                  <p style={{ color: '#4B5563', fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.85 }}>
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