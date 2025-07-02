import React from 'react'
import styles from './about.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import AboutImage from '../assets/about.jpg'

import Image from 'next/image'
const page = () => {
  return (
    <section>
    <SectionHeader title="About Me" subtitle="Who am i what i do"> </SectionHeader>
    <div className={`container ${styles.container}`}>
      <article className={styles.image}>
        <Image src ={ AboutImage} alt="My Image"></Image>
      </article>
      <article className={styles.aboutContent}> 
        <h4>Hi, I'm Ron Ryan Lataza</h4>
        <p> a graduate with a Bachelor of Science in Information Technology. 
           I'm passionate about technology and constantly driven to learn, grow, 
           and innovate in the ever-evolving tech industry. With a strong foundation in IT and a curious, 
           detail-oriented mindset, I thrive on solving problems and exploring new tools and trends.
            I'm eager to contribute to meaningful projects, collaborate with forward-thinking teams, 
            and continue developing my skills to make a lasting impact in the digital world</p>
            <a href="/cv.pdf" download="RonRyan-CV.pdf" className="btn" rel="noopener noreferrer">
  Download CV
</a>


      </article>

    </div>

    </section>
  )
  
}

export default page