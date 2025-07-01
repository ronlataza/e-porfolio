'use client';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Preloader from './components/preloader/Preload.jsx';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Services />
        </>
      )}
    </>
  );
};

export default Page;
