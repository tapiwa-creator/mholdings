import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(6px)',
};

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
      const serviceID  = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const publicKey  = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name:  `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_email:   'tapiwacomfort086@gmail.com',
        message:    formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });

      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a202c] relative overflow-hidden">

      {/* Page-level ambient floating circles - responsive sizes */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-white opacity-5 rounded-full -translate-y-1/3 translate-x-1/3 animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3 animate-float-medium pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-blue-400 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-fast pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 bg-white opacity-5 rounded-full animate-float-medium pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-blue-300 opacity-5 rounded-full animate-float-slow pointer-events-none" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">

        {/* ── Single container — header + two columns ──────────────────────── */}
        <div
          className="rounded-2xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 overflow-hidden"
          style={cardStyle}
        >
          {/* Page header — centred, inside the same card - responsive typography */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10 text-center border-b border-white border-opacity-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Ready to bring your ideas to life? Contact us to discuss how our software, architectural
              and design solutions can support your project.
            </p>
          </div>

          {/* Two columns - stack on mobile, side by side on desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:divide-x lg:divide-white lg:divide-opacity-10">
            
            {/* Horizontal divider for mobile */}
            <div className="lg:hidden w-full h-px bg-white opacity-10"></div>

            {/* ── LEFT: Contact information ──────────────────────────────── */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Contact Information</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                Reach out to our team for inquiries about investment opportunities,
                partnerships, or general information.
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-2xs sm:text-xs uppercase tracking-wider mb-0.5 sm:mb-1">Email</p>
                    <a
                      href="mailto:informkholdings@gmail.com"
                      className="text-white text-xs sm:text-sm md:text-base font-medium hover:text-blue-300 transition-colors break-all"
                    >
                      informkholdings@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-2xs sm:text-xs uppercase tracking-wider mb-0.5 sm:mb-1">Phone</p>
                    <a
                      href="tel:+236781406806"
                      className="text-white text-xs sm:text-sm md:text-base font-medium hover:text-blue-300 transition-colors"
                    >
                      +236 781406806
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-2xs sm:text-xs uppercase tracking-wider mb-0.5 sm:mb-1">Address</p>
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium">Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal divider for mobile */}
            <div className="lg:hidden w-full h-px bg-white opacity-10 my-2"></div>

            {/* ── RIGHT: Contact form ────────────────────────────────────── */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* First + Last name - stack on mobile, side by side on tablet+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white bg-opacity-5 border border-white border-opacity-15 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:border-opacity-60 transition-all text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white bg-opacity-5 border border-white border-opacity-15 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:border-opacity-60 transition-all text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white bg-opacity-5 border border-white border-opacity-15 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:border-opacity-60 transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="4"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white bg-opacity-5 border border-white border-opacity-15 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:border-opacity-60 transition-all text-xs sm:text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#1a202c] font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status */}
                {submitStatus.message && (
                  <div className={`p-3 sm:p-4 rounded-lg text-xs sm:text-sm border ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500 bg-opacity-10 text-green-300 border-green-500 border-opacity-30'
                      : 'bg-red-500 bg-opacity-10 text-red-300 border-red-500 border-opacity-30'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

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
        
        /* Custom text size for extra small screens */
        .text-2xs {
          font-size: 0.625rem; /* 10px */
        }
        @media (min-width: 640px) {
          .text-2xs {
            font-size: 0.75rem; /* 12px - back to normal xs on larger screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;