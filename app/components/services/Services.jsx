import React from 'react'
import Link from 'next/link'
import { MdDesignServices } from "react-icons/md"
import { FaCode } from "react-icons/fa"
import { FaServer } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa6"
import styles from './services.module.css'



const Services = () => {
  return (
    <section className={styles.services}>
      <div className={`container ${styles.servicesWrapper}`}>
        <Link href ="/services" className={ `btn ${styles.service}`}></Link>

      </div>

    </section>
  )
}

export default Services