import React, { useState, useCallback, useEffect } from 'react';

const projects = [
  {
    id: 'school',
    accent: '#60a5fa',
    accentRgb: '96,165,250',
    title: 'School Management Portal',
    description:
      'A comprehensive school management ecosystem enabling prospective students to apply for school places online, while enrolled learners can track fees status, submit assignments, access learning materials, and engage in curriculum-related activities — all within a single unified platform.',
    highlights: [
      'Online Admissions & Applications',
      'Fees Status & Payment Tracking',
      'Assignment Submission System',
      'Learning Resources & Activities',
    ],
    images: ['/00.jpg', '/13.jpg', '/14.jpg', '/15.jpg'],
  },
  {
    id: 'construction',
    accent: '#c9a84c',
    accentRgb: '201,168,76',
    title: 'BuildTrack Project Hub',
    description:
      'Developed and deployed for an active construction firm, BuildTrack was built to bring order to complex, multi-phase projects. The platform was used to coordinate contractors, track milestones, manage budgets, and review architectural plans — all in one unified environment — from the very first groundbreaking through to final handover.',
    highlights: [
      'Milestone & Timeline Tracking',
      'Contractor Coordination',
      'Budget & Cost Management',
      'Architectural Plan Viewer',
    ],
    images: ['/20.jpg', '/22.jpg', '/21.jpg'],
  },
  {
    id: 'sustainability',
    accent: '#4ade80',
    accentRgb: '74,222,128',
    title: 'Sustainability Planning & Compliance',
    description:
      'Delivered across a portfolio of residential and commercial stands, this project focused on embedding sustainability practices and enforcing compliance protocols at every stage of development. From environmental impact assessments to regulatory adherence checks, the solution ensured that each stand met the required standards — helping developers build responsibly and avoid costly non-compliance penalties.',
    highlights: [
      'Environmental Impact Assessments',
      'Regulatory Compliance Enforcement',
      'Residential & Commercial Stands',
      'Sustainability Reporting & Audits',
    ],
    images: ['/27.jpg'],
  },
  {
    id: 'hotel',
    accent: '#34d399',
    accentRgb: '52,211,153',
    title: 'Hotel Management System',
    description:
      'An end-to-end hotel operations platform empowering hospitality businesses to manage reservations, room inventory, housekeeping schedules, guest check-ins, billing, and staff coordination from a single intuitive dashboard — streamlining every touchpoint of the guest experience.',
    highlights: [
      'Reservation & Room Management',
      'Guest Check-in / Check-out',
      'Housekeeping & Staff Scheduling',
      'Billing & Invoice Generation',
    ],
    images: ['/16.jpg', '/17.jpg', '/18.jpg'],
  },
];

const CheckIcon = ({ color }) => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path
      d="M2.5 7L5.5 10L11.5 4"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeft = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ImageSlider = ({ images, accent, accentRgb }) => {
  const [active, setActive] = useState(0);

  const prev = useCallback((e) => {
    e.stopPropagation();
    setActive((a) => (a - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback((e) => {
    e.stopPropagation();
    setActive((a) => (a + 1) % images.length);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl group" style={{ minHeight: '280px' }}>
      {/* Image */}
      <img
        key={active}
        src={images[active]}
        alt="Project screenshot"
        className="w-full h-full object-cover"
        style={{ animation: 'imgFadeIn 0.4s ease', minHeight: '280px' }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.7), transparent)' }}
      />

      {/* Left arrow */}
      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          style={{
            background: 'rgba(10,15,30,0.72)',
            border: `1px solid rgba(${accentRgb},0.3)`,
            color: accent,
            backdropFilter: 'blur(8px)',
          }}
        >
          <ChevronLeft />
        </button>
      )}

      {/* Right arrow */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          style={{
            background: 'rgba(10,15,30,0.72)',
            border: `1px solid rgba(${accentRgb},0.3)`,
            color: accent,
            backdropFilter: 'blur(8px)',
          }}
        >
          <ChevronRight />
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setActive(i); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? '20px' : '6px',
                height: '6px',
                background: i === active ? accent : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, reverse }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col lg:flex-row rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        flexDirection: reverse ? undefined : undefined,
        background: '#ffffff',
        border: `1px solid ${hovered ? `rgba(${project.accentRgb},0.35)` : 'rgba(10,15,30,0.08)'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Reorder cols based on reverse */}
      <div className={`flex flex-col w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        {/* Image col */}
        <div className="w-full lg:w-5/12 flex-shrink-0 p-4">
          <ImageSlider
            images={project.images}
            accent={project.accent}
            accentRgb={project.accentRgb}
          />
        </div>

        {/* Divider */}
        <div
          className="hidden lg:block flex-shrink-0"
          style={{ width: '1px', background: 'rgba(10,15,30,0.06)' }}
        />
        <div
          className="block lg:hidden mx-4"
          style={{ height: '1px', background: 'rgba(10,15,30,0.06)' }}
        />

        {/* Text col */}
        <div className="flex-1 flex flex-col justify-center gap-5 p-8 lg:p-10">

          {/* Title */}
          <h3
            className="leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              fontWeight: 700,
              color: '#0a0f1e',
            }}
          >
            {project.title}
          </h3>

          {/* Accent rule */}
          <div
            className="w-10 h-0.5 rounded"
            style={{
              background: `linear-gradient(90deg, ${project.accent}, transparent)`,
            }}
          />

          {/* Description */}
          <p
            className="leading-relaxed"
            style={{
              color: 'rgba(10,15,30,0.55)',
              lineHeight: 1.85,
              fontSize: 'clamp(13px, 1.8vw, 15px)',
            }}
          >
            {project.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm"
                style={{
                  background: `rgba(${project.accentRgb},0.06)`,
                  border: `1px solid rgba(${project.accentRgb},0.12)`,
                  color: 'rgba(10,15,30,0.7)',
                }}
              >
                <span className="flex-shrink-0">
                  <CheckIcon color={project.accent} />
                </span>
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div
        className="min-h-screen overflow-x-hidden"
        style={{ background: '#f4f1eb', fontFamily: "'DM Sans', sans-serif", color: '#0a0f1e' }}
      >
        {/* Page Header */}
        <div style={{ textAlign: 'center', padding: 'clamp(3rem,8vw,6rem) clamp(1.5rem,5vw,5rem) 0', width: '100%', boxSizing: 'border-box', margin: '0 auto' }}>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0a0f1e',
            }}
          >
            Featured Projects
          </h2>
          <p
            className="mx-auto"
            style={{
              color: 'rgba(10,15,30,0.5)',
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: 1.8,
              maxWidth: '580px',
            }}
          >
            A curated selection of platforms and systems we've designed and delivered — spanning education, hospitality, construction, and architecture.
          </p>
        </div>

        {/* Project Cards */}
        <section
          style={{
            width: '100%',
            boxSizing: 'border-box',
            margin: '0 auto',
            padding: 'clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,5rem) clamp(3rem,6vw,5rem)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedProjects;