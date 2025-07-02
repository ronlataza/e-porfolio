'use client';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Preloader from './components/preloader/Preload.jsx';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoaded');

    if (hasLoadedBefore) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
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
