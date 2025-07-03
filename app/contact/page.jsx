import React from 'react'
import styles from './contact.module.css'
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/footer/Footer';
import ContactImage from '../assets/about1.jpg' // or use a different image
import SectionHeader from '../components/section-header/SectionHeader'

import Image from 'next/image'

const page = () => { 
  return (
       <>
      <section>
        <SectionHeader
          title="Get in Touch"
          subtitle="Feel free to connect with me"
        />
        <div className={`container ${styles.container}`}>
  {/* Text/icons first */}
  <article className={styles.contactContent}>
    <p>Feel free to reach out to me through any of the links below — I'm always open to new opportunities, collaborations, or simply connecting!</p>
    <div className={styles.iconRow}>
      <a href="mailto:ronryan.lataza@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdOutlineMail className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/ron-ryan-lataza-a09433361" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://wa.me/639484805257" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp className={styles.icon} />
      </a>
    </div>
  </article>

  {/* Image second (right side) */}
  <article className={styles.image}>
    <Image src={ContactImage} alt="Contact Image" />
  </article>
</div>
      </section>
      <Footer />
    </>

  )
}

export default page