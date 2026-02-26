import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ── Shared glassmorphism card style ───────────────────────────────────────────
const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(6px)',
};

// ── Animated counter — fires immediately on mount ─────────────────────────────
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
  }, []); // fires on mount

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{count}{suffix}</div>
      <div className="text-gray-400 font-medium text-xs sm:text-sm">{label}</div>
    </div>
  );
};

// ── Landing Page ──────────────────────────────────────────────────────────────
const Landing = () => {
  return (
    <div className="min-h-screen bg-[#1a202c] relative overflow-hidden">

      {/* Page-level ambient floating circles - adjusted for mobile */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-white opacity-5 rounded-full -translate-y-1/3 translate-x-1/3 animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3 animate-float-medium pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-blue-400 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-fast pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-white opacity-5 rounded-full animate-float-medium pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-blue-300 opacity-5 rounded-full animate-float-slow pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 md:px-8 flex flex-col gap-6 sm:gap-7 md:gap-8 max-w-7xl mx-auto">

        {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-20 text-center"
          style={cardStyle}
        >
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">One-stop software and architecture hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Delivering smart solutions in software development and architecture
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
             MK Solutions specializes in professional web development and architectural design services
             Delivering innovative digital solutions and sustainable building designs that create lasting value for our clients across diverse sectors.
            </p>
            <div>
              <Link
                to="/services"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1a202c] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-block text-sm sm:text-base"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* ── 2. STATS — bare on background, no card ───────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white sm:divide-opacity-10 py-4 sm:py-6">
          <div className="py-2 sm:py-4 px-2 sm:px-4">
            <Counter target={1}   suffix=""  label="Years of Operation" delay={100} />
          </div>
          <div className="py-2 sm:py-4 px-2 sm:px-4">
            <Counter target={50}  suffix="+" label="Projects Delivered"  delay={300} />
          </div>
          <div className="py-2 sm:py-4 px-2 sm:px-4">
            <Counter target={20}  suffix="+" label="Active Clients"      delay={500} />
          </div>
          <div className="py-2 sm:py-4 px-2 sm:px-4">
            <Counter target={100} suffix="%" label="Client Satisfaction" delay={700} />
          </div>
        </div>

        {/* ── 3. WHY CHOOSE US ──────────────────────────────────────────────── */}
        <div
          className="rounded-2xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 overflow-hidden"
          style={cardStyle}
        >
          {/* Header — centred title only (no pill) - matching Our Team styling */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-7 md:pb-8 text-center border-b border-white border-opacity-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Why Choose Us</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
              Your Trusted Partner in Innovation & Design
            </p>
          </div>

          {/* Content area - matching Our Team's structure */}
          <div className="p-4 sm:p-6 md:p-8">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At MK Solutions, we don't just build — we transform visions into reality. Whether you're looking to
              elevate your space with precision-crafted architectural plans or scale your business with cutting-edge
              web development, we bring the expertise, creativity, and dedication that set us apart. Our architectural
              solutions are thoughtfully designed to blend functionality with aesthetic excellence, delivering spaces
              that inspire and endure. On the digital front, our modern web development services are engineered for
              performance, user experience, and lasting impact — tailored to help your brand thrive in an ever-evolving
              landscape. With MK Solutions, you gain more than a service provider; you gain a committed partner driven
              by quality, innovation, and your success.
            </p>
          </div>
        </div>

        {/* ── 4. OUR VISION ────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 overflow-hidden"
          style={cardStyle}
        >
          {/* Header — centred title + description */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-7 md:pb-8 text-center border-b border-white border-opacity-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Our Vision</h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              To deliver innovative technology and architectural solutions, solving problems with client satisfaction front and centre
            </p>
          </div>

          {/* Vision sub-cards — responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-y-0 sm:divide-white sm:divide-opacity-10">
            {[
              {
                title: 'Smart Blueprint',
                desc: 'Lead digital transformation in construction, delivering future-ready, intelligent solutions for all.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              },
              {
                title: 'Digital Empowerment',
                desc: 'Drive technology innovation that empowers people, streamlining processes through digitalisation.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              },
              {
                title: 'Visionary Spaces',
                desc: 'Design innovative, sustainable environments that uplift communities and bring people together.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              },
              {
                title: 'Next-Gen Software',
                desc: 'Deliver cutting-edge software upgrades that digitise workflows and connect users worldwide.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              },
            ].map((card, i) => (
              <div key={i} className="p-4 sm:p-6 md:p-8 group hover:bg-white hover:bg-opacity-5 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white bg-opacity-10 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 relative">
                  <span className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-300 rounded-full opacity-0 group-hover:opacity-60 animate-orbit-1"></span>
                  <span className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-40 animate-orbit-2"></span>
                  <span className="absolute inset-0 rounded-xl border-2 border-blue-300 opacity-0 group-hover:opacity-40 animate-ring-ping"></span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-lg font-bold text-white mb-2 sm:mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. OUR TEAM ──────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 overflow-hidden"
          style={cardStyle}
        >
          {/* Header — centred title + description */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-7 md:pb-8 text-center border-b border-white border-opacity-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Our Team</h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Meet our dedicated team of innovative professionals driving excellence across every sector.
            </p>
          </div>

          {/* Team cards — responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 lg:p-8">
            {[
              {
                img: '/2.jpg',
                name: 'Comfort T Mkunyadze',
                role: 'Co-Founder',
                desc: 'Driven by vision and innovation, turning ambitious ideas into impactful solutions across IT, architecture and more.'
              },
              {
                img: '/1.jpg',
                name: 'Leenox B Chapata',
                role: 'Operations Manager',
                desc: 'A detail driven leader with deep expertise in architecture. Blending on-site know-how, design insight and team coordination to turn blueprints into real buildings.'
              },
              {
                img: '/3.jpg',
                name: 'Takudzwa Phuwaphuwa',
                role: 'Sustainability Leader',
                desc: 'A forward thinking strategist who drives eco-friendly practices across the organization, making sure sustainability aligns with company growth and delivers measurable ROI.'
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
              >
                {/* Avatar with orbiting circles */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative flex items-center justify-center">
                  <span className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-blue-300 rounded-full opacity-0 group-hover:opacity-50 animate-orbit-avatar-1"></span>
                  <span className="absolute w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-30 animate-orbit-avatar-2"></span>
                  <span className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-0 group-hover:opacity-60 animate-ring-ping-slow"></span>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden relative z-10">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-center" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm">{member.role}</p>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33%  { transform: translateY(-18px) translateX(10px) scale(1.05); }
          66%  { transform: translateY(10px) translateX(-8px) scale(0.97); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          40%  { transform: translateY(15px) translateX(-12px) scale(1.08); }
          70%  { transform: translateY(-8px) translateX(6px) scale(0.95); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50%  { transform: translateY(-22px) translateX(14px); }
        }
        .animate-float-slow   { animation: float-slow   8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast   { animation: float-fast   4s ease-in-out infinite; }

        @keyframes orbit-1 {
          0%   { transform: rotate(0deg)   translateX(16px) rotate(0deg);   }
          100% { transform: rotate(360deg) translateX(16px) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          0%   { transform: rotate(180deg) translateX(12px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(12px) rotate(-540deg); }
        }
        @media (min-width: 640px) {
          @keyframes orbit-1 {
            0%   { transform: rotate(0deg)   translateX(18px) rotate(0deg);   }
            100% { transform: rotate(360deg) translateX(18px) rotate(-360deg); }
          }
          @keyframes orbit-2 {
            0%   { transform: rotate(180deg) translateX(14px) rotate(-180deg); }
            100% { transform: rotate(540deg) translateX(14px) rotate(-540deg); }
          }
        }
        @media (min-width: 768px) {
          @keyframes orbit-1 {
            0%   { transform: rotate(0deg)   translateX(20px) rotate(0deg);   }
            100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
          }
          @keyframes orbit-2 {
            0%   { transform: rotate(180deg) translateX(16px) rotate(-180deg); }
            100% { transform: rotate(540deg) translateX(16px) rotate(-540deg); }
          }
        }
        @media (min-width: 1024px) {
          @keyframes orbit-1 {
            0%   { transform: rotate(0deg)   translateX(22px) rotate(0deg);   }
            100% { transform: rotate(360deg) translateX(22px) rotate(-360deg); }
          }
          @keyframes orbit-2 {
            0%   { transform: rotate(180deg) translateX(18px) rotate(-180deg); }
            100% { transform: rotate(540deg) translateX(18px) rotate(-540deg); }
          }
        }
        .animate-orbit-1 { animation: orbit-1 2s linear infinite; }
        .animate-orbit-2 { animation: orbit-2 3s linear infinite; }

        @keyframes ring-ping {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0;   }
        }
        .animate-ring-ping { animation: ring-ping 1.4s ease-out infinite; }

        @keyframes orbit-avatar-1 {
          0%   { transform: rotate(0deg)   translateX(40px) rotate(0deg);   }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes orbit-avatar-2 {
          0%   { transform: rotate(120deg) translateX(44px) rotate(-120deg); }
          100% { transform: rotate(480deg) translateX(44px) rotate(-480deg); }
        }
        @media (min-width: 640px) {
          @keyframes orbit-avatar-1 {
            0%   { transform: rotate(0deg)   translateX(48px) rotate(0deg);   }
            100% { transform: rotate(360deg) translateX(48px) rotate(-360deg); }
          }
          @keyframes orbit-avatar-2 {
            0%   { transform: rotate(120deg) translateX(52px) rotate(-120deg); }
            100% { transform: rotate(480deg) translateX(52px) rotate(-480deg); }
          }
        }
        @media (min-width: 768px) {
          @keyframes orbit-avatar-1 {
            0%   { transform: rotate(0deg)   translateX(56px) rotate(0deg);   }
            100% { transform: rotate(360deg) translateX(56px) rotate(-360deg); }
          }
          @keyframes orbit-avatar-2 {
            0%   { transform: rotate(120deg) translateX(60px) rotate(-120deg); }
            100% { transform: rotate(480deg) translateX(60px) rotate(-480deg); }
          }
        }
        @media (min-width: 1024px) {
          @keyframes orbit-avatar-1 {
            0%   { transform: rotate(0deg)   translateX(68px) rotate(0deg);   }
            100% { transform: rotate(360deg) translateX(68px) rotate(-360deg); }
          }
          @keyframes orbit-avatar-2 {
            0%   { transform: rotate(120deg) translateX(72px) rotate(-120deg); }
            100% { transform: rotate(480deg) translateX(72px) rotate(-480deg); }
          }
        }
        .animate-orbit-avatar-1 { animation: orbit-avatar-1 3s linear infinite; }
        .animate-orbit-avatar-2 { animation: orbit-avatar-2 4.5s linear infinite; }

        @keyframes ring-ping-slow {
          0%   { transform: scale(1);    opacity: 0.6; }
          100% { transform: scale(1.15); opacity: 0;   }
        }
        .animate-ring-ping-slow { animation: ring-ping-slow 1.8s ease-out infinite; }
      `}</style>
    </div>
  );
};

export default Landing;