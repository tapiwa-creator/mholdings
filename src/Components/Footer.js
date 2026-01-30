import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a202c] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section - Takes up 2 columns on medium screens */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Mkunyadze Holdings
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Building sustainable value through strategic solutions<br />
              across diverse sectors.
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">
              SERVICES
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#real-estate"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  href="#financial-services"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1"
                >
                  Financial Services
                </a>
              </li>
              <li>
                <a
                  href="#private-equity"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1"
                >
                  Private Equity
                </a>
              </li>
              <li>
                <a
                  href="#global-trade"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1"
                >
                  Global Trade
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">
              LEGAL
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block py-1"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2026 Mkunyadze Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;