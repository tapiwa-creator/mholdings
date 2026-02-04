import React, { useState, useEffect, useRef } from 'react';

// Stats Counter Component - UPDATED for color matching and responsiveness
const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ target, suffix = '', label, delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

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
    }, [isVisible, target, delay]);

    return (
      <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
        {/* UPDATED: Changed text color to match the Learn More button (#1a202c) */}
        <div className="text-5xl font-bold mb-3 text-[#1a202c]">
          {count}{suffix}
        </div>
        {/* UPDATED: Changed label text to a darker gray for better contrast */}
        <div className="text-base text-gray-700 font-medium">
          {label}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="bg-white py-16 px-8 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* CHANGED: Always 4 columns */}
        <div className="grid grid-cols-4 gap-12">
          <Counter target={1} suffix="" label="Years of Operation" delay={100} />
          <Counter target={50} suffix="+" label="Projects Delivered" delay={200} />
          <Counter target={20} suffix="+" label="Active Clients" delay={300} />
          <Counter target={100} suffix="%" label="Client Satisfaction" delay={400} />
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full white background */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* CHANGED: Always 2 columns grid, removed all responsive classes */}
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge with animated border and blinking dot */}
              <div className="relative inline-block">
                {/* Animated border container */}
                <div className="absolute -inset-[3px] rounded-full overflow-hidden">
                  {/* Top border segment */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a202c] animate-[border-move-top_6s_linear_infinite]" 
                       style={{ animationDelay: '0s' }}></div>
                  {/* Right border segment */}
                  <div className="absolute top-0 right-0 bottom-0 w-[3px] bg-[#1a202c] animate-[border-move-right_6s_linear_infinite]" 
                       style={{ animationDelay: '1.5s' }}></div>
                  {/* Bottom border segment */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1a202c] animate-[border-move-bottom_6s_linear_infinite]" 
                       style={{ animationDelay: '3s' }}></div>
                  {/* Left border segment */}
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#1a202c] animate-[border-move-left_6s_linear_infinite]" 
                       style={{ animationDelay: '4.5s' }}></div>
                </div>
                
                {/* Badge content */}
                <div className="relative bg-white rounded-full px-4 py-2 shadow-sm z-10">
                  <div className="w-2 h-2 bg-[#1a202c] rounded-full animate-pulse inline-block mr-2"></div>
                  <span className="text-[#1a202c] text-sm font-medium">
                    Reliable Strategic Ally
                  </span>
                </div>
              </div>

              {/* Heading - Fixed font size */}
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Innovative Approaches for Sustainable Development
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
               MK Holdings delivers innovative technology and engineering solutions across diverse sectors, creating lasting value and sustainable outcomes for clients.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={openModal}
                  className="px-6 py-3 bg-[#1a202c] text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Landing Image */}
            <div className="flex justify-end items-center h-full w-full">
              <img 
                src="/landing.jpg" 
                alt="MK Holdings Professional" 
                className="w-[120%] max-w-none ml-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Counter Strip - Right at the base of hero image */}
      <StatsCounter />

      {/* Everything AFTER the Hero section gets the gradient background */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Modal for Learn More */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={closeModal}
            ></div>

            {/* Modal Container */}
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {/* Modal Header */}
                <div className="bg-[#1a202c] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold leading-6 text-white">
                      MK Holdings
                    </h3>
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={closeModal}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="bg-white px-6 py-6">
                  <div className="mt-2">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Founded in 2025 by a group of innovative young professionals, the company was established with a bold vision to deliver modern, practical solutions across IT, engineering, and architecture. Built on creativity, technical skill, and a forward-thinking mindset, the company brings fresh perspectives to solving today's complex challenges.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Currently, its core focus lies in information technology, engineering services, and architectural design, where it provides reliable, efficient, and well-structured solutions tailored to client needs. By combining digital innovation with sound engineering and thoughtful design, the company delivers work that is both functional and sustainable.
                    </p>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 px-6 py-4">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#1a202c] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Core Sectors Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
               To deliver innovative technology and architectural solutions, solving problems with client satisfaction front and centre
              </p>
            </div>

            {/* Sectors Grid - CHANGED: Always 4 columns */}
            <div className="grid grid-cols-4 gap-6">
              {/* Real Estate Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Smart Blueprint
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Lead digital transformation in construction, delivering future-ready, intelligent solutions for all.
                </p>
              </div>

              {/* Financial Services Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                 Digital Empowerment
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                 Drive technology innovation that empowers people, streamlining processes through digitalisation.
                </p>
              </div>

              {/* Private Equity Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                 Visionary Spaces
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Design innovative, sustainable environment that uplift communities and bring people together.
                </p>
              </div>

              {/* Global Trade Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Next-Gen Software
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Deliver cutting-edge Software upgrades that digitise workflows and connect users worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Meet our dedicated team of investment professionals and industry experts.
              </p>
            </div>

            {/* Team Grid - CHANGED: Always 3 columns */}
            <div className="grid grid-cols-3 gap-6">
              {/* Team Member 1 - With 2.jpg */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Team Member Photo - 2.jpg */}
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/2.jpg" 
                    alt="Team Member 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Comfort T Mkunyadze
                </h3>
                <p className="text-blue-600 font-medium text-center mb-4 text-base">
                  Co-Founder
                </p>
                <p className="text-gray-600 leading-relaxed text-center text-base">
                  Driven by vision and innovation, turning ambitious ideas into impactful solutions across IT, architecture and more.
                </p>
              </div>

              {/* Team Member 2 - With 1.jpg (centered) */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Team Member Photo - 1.jpg with object-position center */}
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/1.jpg" 
                    alt="Team Member 2" 
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Leenox B Chapata
                </h3>
                <p className="text-blue-600 font-medium text-center mb-4 text-base">
                  Operations Manager
                </p>
                <p className="text-gray-600 leading-relaxed text-center text-base">
                 A detail driven leader with deep expertise in architecture. Blending on-site know-how, design insight and team coordination to turn blueprints into real buildings.
                </p>
              </div>

              {/* Team Member 3 - With 3.jpg */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Team Member Photo - 3.jpg */}
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src="/3.jpg" 
                    alt="Team Member 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Takudzwa Phuwaphuwa
                </h3>
                <p className="text-blue-600 font-medium text-center mb-4 text-base">
                  Sustainability Leader
                </p>
                <p className="text-gray-600 leading-relaxed text-center text-base">
                  A forward thinking strategist who drives eco-friendly practices across the organization, making sure sustainability aligns with company growth and delivers measurable ROI
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add custom CSS animations */}
      <style jsx>{`
        @keyframes border-move-top {
          0%, 24.9% {
            transform: translateX(-100%);
            opacity: 0;
          }
          25% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50% {
            transform: translateX(0%);
            opacity: 1;
          }
          75% {
            transform: translateX(100%);
            opacity: 1;
          }
          75.1%, 100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes border-move-right {
          0%, 24.9% {
            transform: translateY(-100%);
            opacity: 0;
          }
          25% {
            transform: translateY(-100%);
            opacity: 1;
          }
          50% {
            transform: translateY(0%);
            opacity: 1;
          }
          75% {
            transform: translateY(100%);
            opacity: 1;
          }
          75.1%, 100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        
        @keyframes border-move-bottom {
          0%, 24.9% {
            transform: translateX(100%);
            opacity: 0;
          }
          25% {
            transform: translateX(100%);
            opacity: 1;
          }
          50% {
            transform: translateX(0%);
            opacity: 1;
          }
          75% {
            transform: translateX(-100%);
            opacity: 1;
          }
          75.1%, 100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        @keyframes border-move-left {
          0%, 24.9% {
            transform: translateY(100%);
            opacity: 0;
          }
          25% {
            transform: translateY(100%);
            opacity: 1;
          }
          50% {
            transform: translateY(0%);
            opacity: 1;
          }
          75% {
            transform: translateY(-100%);
            opacity: 1;
          }
          75.1%, 100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Landing;