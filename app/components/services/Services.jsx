import React from 'react'
import Link from 'next/link'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdTrendingUp } from "react-icons/md"

import styles from './services.module.css'



const Services = () => {
  return (
    <section className={styles.services}>
      <div className={`container ${styles.servicesWrapper}`}>
       
        <Link href ="/career" className={ `btn ${styles.service}`}>
        <span className={styles.icon}><BsPatchCheckFill></BsPatchCheckFill></span>
        <h6 className= {styles.title}>Certifications</h6>
        </Link>
        <Link href ="/career" className={ `btn ${styles.servicer}`}>
        <span className={styles.icon}><MdTrendingUp></MdTrendingUp></span>
        <h6 className= {styles.title}>Journey</h6>
        </Link>
        

      </div>
      

    </section>
  )
}

export default Services