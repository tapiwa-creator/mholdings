import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Architectural Plan Drawing",
      subtitle: "Residential & Commercial Stands",
      description:
        "From bespoke residential homes to large-scale commercial developments, MK Solutions delivers precision-crafted architectural plans tailored to your vision. Our experienced team produces detailed drawings that meet regulatory standards while maximising space, functionality, and aesthetic appeal — turning every stand into a place worth building.",
      image: "/archi.jpg",
      alt: "Architectural Plan Drawing"
    },
    {
      title: "Web Development",
      subtitle: "Modern Digital Experiences",
      description:
        "We design and build high-performance websites and web applications that captivate users and drive results. From sleek corporate platforms to dynamic e-commerce solutions, our development team combines clean code with compelling design — ensuring your digital presence is fast, responsive, and built to scale with your ambitions.",
      image: "/web.jpg",
      alt: "Web Development"
    },
    {
      title: "Software Management & IT Consultancy",
      subtitle: "Strategic Technology Guidance",
      description:
        "Navigate the complexities of modern technology with confidence. MK Solutions provides expert software management and IT consultancy services — from system architecture and infrastructure planning to software implementation and ongoing support. We align technology strategy with business goals to keep your operations efficient, secure, and future-ready.",
      image: "/it.jpg",
      alt: "IT Consultancy"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a202c] relative overflow-hidden">

      {/* Large ambient floating circles on the page background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/3 translate-x-1/3 animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3 animate-float-medium pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-fast pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white opacity-5 rounded-full animate-float-medium pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-300 opacity-5 rounded-full animate-float-slow pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <section className="relative z-10 pt-12 pb-16 px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Header - "What We Offer" removed */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">Our Core Services</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A multidisciplinary company combining architectural design, web development, and IT consultancy to deliver smart, functional, and beautifully crafted solutions.
            </p>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden flex flex-row border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(6px)' }}
              >
                {/* Left: Image */}
                <div className="w-2/5 flex-shrink-0 relative overflow-hidden" style={{ minHeight: '260px' }}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Fade edge into card */}
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#1a202c] to-transparent opacity-60"></div>
                </div>

                {/* Vertical white divider line */}
                <div className="w-px bg-white opacity-20 flex-shrink-0"></div>

                {/* Right: Text */}
                <div className="flex-1 p-10 flex flex-col justify-center">
                  {/* Subtitle pill */}
                  <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-3 py-1 mb-5 w-fit">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-xs font-semibold tracking-wide uppercase">{service.subtitle}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-18px) translateX(10px) scale(1.05); }
          66% { transform: translateY(10px) translateX(-8px) scale(0.97); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          40% { transform: translateY(15px) translateX(-12px) scale(1.08); }
          70% { transform: translateY(-8px) translateX(6px) scale(0.95); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-22px) translateX(14px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Services;