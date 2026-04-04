import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, path = '' }) => {
  const siteUrl = 'https://elevatelt.co.zw';
  const url = `${siteUrl}${path}`;
  
  return (
    <Helmet>
      <title>{title} | ElevateLT</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | ElevateLT`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="ElevateLT" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${title} | ElevateLT`} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
