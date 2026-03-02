import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl">
          {/* Section Label */}
          <div className="mb-4 md:mb-6">
            <span className="text-cyan-500 font-semibold text-base md:text-lg tracking-wide uppercase">
              ABOUT US
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
            A Legacy of Multi-Sector Excellence
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-12">
            LT Solutions operates across IT services, software development, architectural planning and design & builds.
          </p>

          {/* Features List */}
          <div className="space-y-4 md:space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 md:pt-1 flex-1">
                Committed to integrity, compliance, and professional standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 md:pt-1 flex-1">
                Services spanning IT consultancy, software development, architectural planning, home decorations and renovations
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 md:pt-1 flex-1">
                Commitment to ethical business practices
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-cyan-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 md:pt-1 flex-1">
                Focused on sustainable, efficient, and future-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;