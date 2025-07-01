'use client';
import React from 'react';
import styles from './preload.module.css';

const Preloader = () => {
  return (
     <div className={styles.preloader}>
      <div className={styles.shapeCircle}></div>
      <div className={styles.shapeTriangle}></div>
      <div className={styles.shapeSquare}></div>
    </div>
  );
};

export default Preloader;
