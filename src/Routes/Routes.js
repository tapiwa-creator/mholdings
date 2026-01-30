import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Landing from '../Pages/Landing';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Use Layout as the wrapper for all pages */}
      <Route path="/" element={<Layout />}>
        {/* Landing page as the default (index) route */}
        <Route index element={<Landing />} />
        
        {/* Other pages */}
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Optional: 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;