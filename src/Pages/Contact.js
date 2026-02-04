import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS configuration
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_email: 'tapiwacomfort086@gmail.com',
        message: formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Ready to bring your ideas to life? Contact us to discuss how our software, architectural and design solutions can support your project.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Side - Contact Information */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Reach out to our team for inquiries about investment opportunities,
              partnerships, or general information.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Email</p>
                  <a href="mailto:informkholdings@gmail.com" className="text-gray-900 font-medium hover:text-cyan-500 transition-colors text-sm md:text-base truncate block">
                   informkholdings@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Phone</p>
                  <a href="tel:+236781406806" className="text-gray-900 font-medium hover:text-cyan-500 transition-colors text-sm md:text-base">
                    +236 781406806
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Address</p>
                  <p className="text-gray-900 font-medium text-sm md:text-base">
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit}>
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1 md:mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1 md:mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4 md:mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4 md:mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1a202c] text-white font-medium py-2.5 md:py-3 px-4 md:px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus.message && (
                <div className={`mt-3 md:mt-4 p-3 md:p-4 rounded-lg text-sm md:text-base ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;