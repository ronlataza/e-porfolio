"use client"

import React from 'react'
import { Pagination } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './testimonials.module.css'
const Testimonials = () => {
  return (
    <section className={StyleSheet.section}>
        <h2>Testimonials</h2>
        <p>Check out what clients says</p>
         <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}

      pagination={{ clickable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
    <div className="swiper-pagination"></div>
    </Swiper>
    
    </section>
  )
}

export default Testimonials