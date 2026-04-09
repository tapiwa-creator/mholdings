import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Components/Layout';
import Landing from '../Pages/Landing';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Project'; // Make sure this path is correct

// Optional: Create a simple 404 component
const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0f1e',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>Page not found</p>
        <a href="/" style={{ color: '#c9a84c', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>
          Go back home →
        </a>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  // Debug logging
  console.log('AppRoutes rendered - available routes: /, about, services, projects, contact');

  return (
    <Routes>
      {/* Use Layout as the wrapper for all pages */}
      <Route path="/" element={<Layout />}>
        {/* Landing page as the default (index) route */}
        <Route index element={<Landing />} />

        {/* Other pages - ensure paths match what you type in browser */}
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />

        {/* Redirect /project (singular) to /projects (plural) */}
        <Route path="project" element={<Navigate to="/projects" replace />} />

        {/* 404 page for any unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;