import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a202c] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main Footer Content - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Brand Section - Full width on mobile, 2 columns on medium+, 2 columns on large+ */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3 sm:mb-0">
                <span className="text-white font-bold text-base md:text-lg">MK</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                MK Solutions
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Building sustainable value through strategic solutions<br className="hidden sm:block" />
              across diverse sectors.
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white font-semibold text-base md:text-lg">
              SERVICES
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {['Architecture', 'Web Development', 'IT Consultancy'].map((service, index) => (
                <li key={index}>
                  <a
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1 text-sm md:text-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-white font-semibold text-base md:text-lg">
              LEGAL
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1 text-sm md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1 text-sm md:text-base"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Improved spacing for mobile */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm md:text-base px-4">
            © 2026 MK Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;